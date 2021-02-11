import TodoDetail from '../components/TodoDetail'

export default {
  title: 'Components/TodoDetail',
  component: TodoDetail,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TodoDetail },
  template: '<TodoDetail v-bind="$props" v-on="$props" />',
})

export const Default = Template.bind({})
Default.args = {
  todo: {
    id: 0,
    title: 'タスクのタイトル',
    text: 'タスクの詳細',
    isDone: false,
  },
}
