import TodoInput from '~/components/TodoInput'

export default {
  title: 'Components/TodoInput',
  components: TodoInput,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TodoInput },
  template: '<TodoInput v-bind="$props" v-on="$props" />',
})

export const Default = Template.bind({})
