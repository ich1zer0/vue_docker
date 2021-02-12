export default {
  title: 'Components/TodoDetail',
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
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
