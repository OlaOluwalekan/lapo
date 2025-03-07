interface AnalyticsDataProps {
  id: string
  label: string
  count?: string
  iconLink: string
  percentage?: string
  comparison?: string
  amount?: string
  message?: string
}

export const analyticsData: AnalyticsDataProps[] = [
  {
    id: '1',
    label: 'Total Active Cards',
    count: '26,478',
    iconLink: '/images/analytics/total-active-cards.svg',
    percentage: '+9%',
    comparison: 'this month',
  },
  {
    id: '2',
    label: 'Total Personalized Cards',
    count: '15,703',
    iconLink: '/images/analytics/total-personalized-cards.svg',
    percentage: '+8.5%',
    comparison: 'this month',
  },
  {
    id: '3',
    label: "Today's Revenue",
    amount: '₦9.3M',
    iconLink: '/images/analytics/revenue-today.svg',
    percentage: '+6%',
    comparison: 'vs yesterday',
  },
  {
    id: '4',
    label: 'Pending Requests',
    count: '38',
    iconLink: '/images/analytics/pending-requests.svg',
    message: 'Requires attention',
  },
]
