import { Layout } from '@/layout'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import * as React from 'react'

export const Route = createRootRoute({
	component: () => (
		<React.Fragment>
			<Layout>
				<Outlet />
			</Layout>
			{import.meta.env.PROD ? null : (
				<>
					<TanStackRouterDevtools />
					<ReactQueryDevtools />
				</>
			)}
		</React.Fragment>
	),
})
