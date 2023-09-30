import { Directive, type ElementRef, HostListener, Input } from '@angular/core'
import { type ControlValueAccessor } from '@angular/forms'
import { MAT_LEGACY_INPUT_VALUE_ACCESSOR as MAT_INPUT_VALUE_ACCESSOR } from '@angular/material/legacy-input'

@Directive({
  selector: 'input[phoneNumberFormatter]',
  providers: [
    { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: PhoneNumberFormatterDirective }
  ]
})
export class PhoneNumberFormatterDirective implements ControlValueAccessor {
  constructor (private readonly element: ElementRef<HTMLInputElement>) { }

  private _value: string | undefined

  get value (): string | undefined {
    return this._value
  }

  @Input('value')
  set value (value: string | undefined) {
    this._value = value
    this.formatValue(value)
  }

  private formatValue (value: string | undefined) {
    if (value) {
      this.element.nativeElement.value = phoneNumberConverter(value)
    } else {
      this.element.nativeElement.value = ''
    }
  }

  private unFormatValue () {
    const value = this.element.nativeElement.value
    this._value = value.replace(/[^\d]/g, '')

    if (value) {
      this.element.nativeElement.value = this._value
    } else {
      this.element.nativeElement.value = ''
    }
  }

  @HostListener('input', ['$event.target.value'])
  onInput (value: string) {
    this._value = value.replace(/[^\d]/g, '')
    this._onChange(this._value)
  }

  @HostListener('blur')
  _onBlur () {
    this.formatValue(this._value)
  }

  @HostListener('focus')
  onFocus () {
    this.unFormatValue()
  }

  _onChange (value: any): void { }

  writeValue (value: any): void {
    this._value = value
    this.formatValue(this._value)
  }

  registerOnChange (fn: any): void {
    this._onChange = fn
  }

  registerOnTouched (fn: any): void { }
}

const phoneNumberConverter = (value: string): string => {
  if (value.length == 10) {
    const a = value.slice(0, 3)
    const b = value.slice(3, 6)
    const c = value.slice(6)

    return `(${a}) ${b}-${c}`
  } else {
    return value
  }
}
