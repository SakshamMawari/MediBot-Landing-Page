import React from 'react';
import { cn } from '../../lib/utils';
import { Shield, Users, Rocket } from 'lucide-react';
import {
	type FeatureItem,
	PricingTable,
	PricingTableBody,
	PricingTableHeader,
	PricingTableHead,
	PricingTableRow,
	PricingTableCell,
	PricingTablePlan,
} from './pricing-table';
import { Button } from './button';
import { useTheme } from '../../contexts/ThemeContext';

export function PricingTableDemo() {
	const { theme } = useTheme();
	
	return (
		<div className="relative min-h-screen overflow-hidden px-4 py-20">
			<div
				className={cn(
					'absolute inset-0 z-[-10] size-full max-h-102 opacity-50',
					'[mask-image:radial-gradient(ellipse_at_center,var(--background),transparent)]',
				)}
				style={{
					backgroundImage:
						'radial-gradient(var(--foreground) 1px, transparent 1px)',
					backgroundSize: '32px 32px',
				}}
			/>
			<div className="relative mx-auto flex max-w-6xl flex-col items-center text-center py-16">
				<h1
					className={cn(
						'text-4xl leading-tight font-light text-balance sm:text-6xl md:text-7xl lg:text-8xl font-geist mb-8',
						theme === 'dark' ? 'text-white' : 'text-black'
					)}
				>
					{'Affordable '}
					<span className={cn('font-geist font-light', theme === 'dark' ? 'text-white' : 'text-black')}>
						{'AI Health Assistant'}
					</span>
					<br />
					{'for '}
					<span className={cn('font-geist font-light', theme === 'dark' ? 'text-white' : 'text-black')}>
						{'Rural Communities'}
					</span>
				</h1>
				<p className={cn('mt-8 max-w-3xl text-pretty text-lg md:text-xl', theme === 'dark' ? 'text-white/80' : 'text-black/80')}>
					Get instant medical guidance, symptom analysis, and health monitoring in your local language with our AI-powered medical assistant designed for rural India.
				</p>
			</div>
			<Default />
		</div>
	);
}

function Default() {
	return (
		<PricingTable className="mx-auto my-5 max-w-5xl">
			<PricingTableHeader>
				<PricingTableRow>
					<th />
					<th className="p-1">
						<PricingTablePlan
							name="Basic Health"
							badge="For Individuals"
							price="₹0"
							compareAt="₹199"
							icon={Shield}
						>
							<a 
								href="/signup" 
								className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 w-full"
							>
								Get Started Free
							</a>
						</PricingTablePlan>
					</th>
					<th className="p-1">
						<PricingTablePlan
							name="Family Care"
							badge="For Families"
							price="₹299"
							compareAt="₹499"
							icon={Users}
							className="after:pointer-events-none after:absolute after:-inset-0.5 after:rounded-[inherit] after:bg-gradient-to-b after:from-violet-500/15 after:to-transparent after:blur-[2px]"
						>
							<a 
								href="/signup" 
								className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 w-full rounded-lg border-violet-700/60 bg-violet-600/80 text-white hover:bg-violet-600"
							>
								Start Free Trial
							</a>
						</PricingTablePlan>
					</th>
					<th className="p-1">
						<PricingTablePlan
							name="Community Health"
							badge="For Villages"
							price="₹999"
							compareAt="₹1999"
							icon={Rocket}
						>
							<Button variant="outline" className="w-full rounded-lg" size="lg">
								Contact Sales
							</Button>
						</PricingTablePlan>
					</th>
				</PricingTableRow>
			</PricingTableHeader>
			<PricingTableBody>
				{FEATURES.map((feature, index) => (
					<PricingTableRow key={index}>
						<PricingTableHead>{feature.label}</PricingTableHead>
						{feature.values.map((value, index) => (
							<PricingTableCell key={index}>{value}</PricingTableCell>
						))}
					</PricingTableRow>
				))}
			</PricingTableBody>
		</PricingTable>
	);
}

export const FEATURES: FeatureItem[] = [
	{
		label: 'Daily Health Consultations',
		values: ['5 per day', 'Unlimited', 'Unlimited'],
	},
	{
		label: 'Symptom Analysis',
		values: [true, true, true],
	},
	{
		label: 'Local Language Support',
		values: ['3 languages', '10 languages', '15+ languages'],
	},
	{
		label: 'Offline Mode',
		values: [false, true, true],
	},
	{
		label: 'Health Monitoring',
		values: ['Basic tracking', 'Advanced tracking', 'Complete health dashboard'],
	},
	{
		label: 'Emergency Alerts',
		values: ['Basic', 'Advanced', 'Real-time with GPS'],
	},
	{
		label: 'Medicine Reminders',
		values: [false, true, true],
	},
	{
		label: 'Family Health Records',
		values: [false, 'Up to 5 members', 'Unlimited members'],
	},
	{
		label: 'Doctor Consultations',
		values: [false, '2 per month', 'Unlimited'],
	},
	{
		label: 'Rural Health Specialists',
		values: [false, false, true],
	},
	{
		label: 'Village Health Reports',
		values: [false, false, true],
	},
	{
		label: 'Data Storage',
		values: ['1 month', '6 months', '2 years'],
	},
	{
		label: 'WhatsApp Integration',
		values: [false, true, true],
	},
	{
		label: 'Voice Commands',
		values: [false, true, true],
	},
	{
		label: 'Community Health Analytics',
		values: [false, false, true],
	},
];
