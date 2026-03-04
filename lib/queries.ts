import { gql } from '@apollo/client'

// Homepage query with stats
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        __typename
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Projects
export const GET_PROJECTS = gql`
  query GetProjects($first: Int = 20) {
    nodeProjects(first: $first, sortKey: TITLE) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeProject {
          body {
            processed
            summary
          }
          projectType
          location
          yearCompleted
          squareFootage
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_PROJECT_BY_PATH = gql`
  query GetProjectByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeProject {
            __typename
            id
            title
            path
            body {
              processed
            }
            projectType
            location
            yearCompleted
            squareFootage
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Team Members
export const GET_TEAM_MEMBERS = gql`
  query GetTeamMembers($first: Int = 50) {
    nodeTeamMembers(first: $first, sortKey: TITLE) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeTeamMember {
          body {
            processed
          }
          position
          email
          photo {
            url
            alt
            width
            height
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_TEAM_MEMBER_BY_PATH = gql`
  query GetTeamMemberByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeTeamMember {
            __typename
            id
            title
            path
            body {
              processed
            }
            position
            email
            photo {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Awards
export const GET_AWARDS = gql`
  query GetAwards($first: Int = 20) {
    nodeAwards(first: $first, sortKey: CREATED_AT) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeAward {
          body {
            processed
            summary
          }
          awardingBody
          awardYear
          projectName
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_AWARD_BY_PATH = gql`
  query GetAwardByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeAward {
            __typename
            id
            title
            path
            body {
              processed
            }
            awardingBody
            awardYear
            projectName
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// News
export const GET_NEWS = gql`
  query GetNews($first: Int = 20) {
    nodeNewsItems(first: $first, sortKey: CREATED_AT) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeNews {
          body {
            processed
            summary
          }
          newsCategory
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_NEWS_BY_PATH = gql`
  query GetNewsByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeNews {
            __typename
            id
            title
            path
            body {
              processed
            }
            newsCategory
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Generic route query for all content types
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            __typename
            id
            title
            path
            body {
              processed
            }
          }
          ... on NodeProject {
            __typename
            id
            title
            path
            body {
              processed
            }
            projectType
            location
            yearCompleted
            squareFootage
            image {
              url
              alt
            }
          }
          ... on NodeTeamMember {
            __typename
            id
            title
            path
            body {
              processed
            }
            position
            email
            photo {
              url
              alt
            }
          }
          ... on NodeAward {
            __typename
            id
            title
            path
            body {
              processed
            }
            awardingBody
            awardYear
            projectName
            image {
              url
              alt
            }
          }
          ... on NodeNews {
            __typename
            id
            title
            path
            body {
              processed
            }
            newsCategory
            image {
              url
              alt
            }
          }
          ... on NodeHomepage {
            __typename
            id
            title
            path
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredItemsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured projects for homepage
export const GET_FEATURED_PROJECTS = gql`
  query GetFeaturedProjects {
    nodeProjects(first: 3, sortKey: TITLE) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeProject {
          projectType
          location
          yearCompleted
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Featured news for homepage
export const GET_FEATURED_NEWS = gql`
  query GetFeaturedNews {
    nodeNewsItems(first: 3, sortKey: CREATED_AT) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeNews {
          body {
            summary
          }
          newsCategory
          image {
            url
            alt
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Recent awards for homepage
export const GET_RECENT_AWARDS = gql`
  query GetRecentAwards {
    nodeAwards(first: 3, sortKey: CREATED_AT) {
      nodes {
        __typename
        id
        title
        path
        ... on NodeAward {
          awardingBody
          awardYear
          projectName
        }
      }
    }
  }
`
