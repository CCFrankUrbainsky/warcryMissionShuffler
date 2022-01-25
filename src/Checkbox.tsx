import React, { ChangeEventHandler } from 'react'
import { AvailableDeckName } from './Cards'

type CheckboxParams = {
  label: AvailableDeckName
  value: boolean
  onChange: (label: AvailableDeckName, value: boolean) => void
}

export default class Checkbox extends React.Component<CheckboxParams> {
  constructor(params: CheckboxParams) {
    super(params)
    this.handleChange = this.handleChange.bind(this)
  }

  changed = () => {
    this.props.onChange(this.props.label, !this.props.value)
  }

  handleChange(event: ChangeEventHandler) {
    this.setState(event.arguments)
  }

  render(): React.ReactNode {
    return (
      <label>
        <input type="checkbox" checked={this.props.value} onChange={this.changed} />
        {this.props.label}
      </label>
    )
  }
}

