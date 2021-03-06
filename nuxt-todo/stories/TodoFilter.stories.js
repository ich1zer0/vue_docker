export default {
  title: 'Components/TodoFilter',
  argTypes: {
    checked: {
      control: {
        type: 'select',
        options: ['all', 'working', 'done'],
      },
    },
    checkedFilter: { action: 'change' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template:
    '<TodoFilter v-bind="$props" v-on="$props" @change="checkedFilter" />',
})

export const Default = Template.bind({})
Default.args = {
  checked: 'all',
  options: [
    { label: 'すべて', value: 'all' },
    { label: '作業中', value: 'working' },
    { label: '完了', value: 'done' },
  ],
}
