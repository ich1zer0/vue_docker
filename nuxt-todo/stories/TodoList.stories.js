export default {
  title: 'Components/TodoList',
  argTypes: {
    handleRemoveTodo: { action: 'remove' },
    handleToggleTodoState: { action: 'toggle' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template:
    '<TodoList v-bind="$props" v-on="$props" @remove="handleRemoveTodo" @toggle="handleToggleTodoState" />',
})

export const Default = Template.bind({})
Default.args = {
  todos: [
    {
      id: 0,
      title: 'タスクのタイトル',
      text: 'タスクの詳細',
      isDone: false,
    },
  ],
}
