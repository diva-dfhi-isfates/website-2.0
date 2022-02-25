import { API_BASEURL } from '$lib/constants'
import { gql, GraphQLClient } from 'graphql-request'

export const getDivaMembers = async (locale: string) => {
  const graphcms = new GraphQLClient(API_BASEURL)

  const query = gql`
    {
      members(locales: ${locale}) {
        firstname
        lastname
        role
        profile {
          url
        }
        description {
          html
        }
      }
    }
  `

  const { members } = await graphcms.request(query)
  return members
}

export const getGoodies = async (locale: string) => {
  const graphcms = new GraphQLClient(API_BASEURL)

  const query = gql`
    {
      goodies(locales: ${locale}) {
        name
        image {
          url
        }
        price
      }
    }
  `

  const { goodies } = await graphcms.request(query)
  return goodies
}
