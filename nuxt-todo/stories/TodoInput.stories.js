export default {
  title: 'Components/TodoInput',
  argTypes: { handleAddTodo: { action: 'submit' } },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template:
    '<TodoInput v-bind="$props" v-on="$props" @submit="handleAddTodo" />',
})

export const Default = Template.bind({})
