import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_TEAM_MEMBERS } from '@/lib/queries'
import { TeamMembersData } from '@/lib/types'
import Header from '../components/Header'
import TeamMemberCard from '../components/TeamMemberCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Team Members | Arden & Cole Architects',
  description: 'Browse our team members.',
}

async function getTeamMembers() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<TeamMembersData>({
      query: GET_TEAM_MEMBERS,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeTeamMembers?.nodes || []
  } catch (error) {
    console.error('Error fetching team members:', error)
    return []
  }
}

export default async function TeamMembersPage() {
  const items = await getTeamMembers()

  return (
    <div className="min-h-screen bg-primary-950">
      <Header />

      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 to-primary-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pt-16">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-white mb-6">
              Team Members
            </h1>
            <p className="text-xl text-stone-400 max-w-3xl mx-auto">
              The talented people behind our work.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-stone-400 mb-2">No Team Members Yet</h2>
              <p className="text-stone-500">
                Team Members will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <TeamMemberCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
