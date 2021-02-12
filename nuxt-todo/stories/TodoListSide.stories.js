export default {
  title: 'Components/TodoListSide',
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<TodoListSide v-bind="$props" v-on="$props" />',
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
