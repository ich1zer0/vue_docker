import TodoFilter from '~/components/TodoFilter'

export default {
  title: 'Components/TodoFilter',
  component: TodoFilter,
  argTypes: {
    checked: {
      control: {
        type: 'select',
        options: ['all', 'working', 'done'],
      },
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TodoFilter },
  template: '<TodoFilter v-bind="$props" v-on="$props" />',
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
