import Loading from '~/components/Loading'

export default {
  title: 'Components/Loading',
  component: Loading,
}

const Template = (args) => ({
  components: { Loading },
  template: '<Loading/>',
})

export const Default = Template.bind({})
