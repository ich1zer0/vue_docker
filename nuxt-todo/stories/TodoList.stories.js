import TodoList from '~/components/TodoList'

export default {
  title: 'Components/TodoList',
  components: TodoList,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TodoList },
  template: '<TodoList v-bind="$props" v-on="$props" />',
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
