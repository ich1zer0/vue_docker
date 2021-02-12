export default {
  title: 'Components/TodoInput',
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<TodoInput v-bind="$props" v-on="$props" />',
})

export const Default = Template.bind({})
