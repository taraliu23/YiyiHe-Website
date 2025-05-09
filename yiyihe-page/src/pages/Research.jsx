
import React, { useEffect, useRef, useState } from 'react'
import '../App.css'
import { Typography } from '@mui/material'
import ImageSwitcher from '../components/ImageSwitcher'


const researchAreas = [
	{
		id: 'climateResilience',
		title: "Climate Resilience",
		contentBlocks: [
			{
				image:
					[
						'/research/GRR_01_small.jpg',
						'/research/GRR_02.jpg',
						'/research/GRR_03.jpg',
						'/research/GRR_04.jpg',
						'/research/GRR_05.jpg',
					],
				description: 'As climate change accelerates, cities around the world are facing growing threats from flooding—especially to critical infrastructure like road networks. This project provides the first globally consistent analysis of how floodwaters directly affect urban roads and how those impacts ripple through cities, disrupting mobility at scale. We analyzed over 14 million kilometers of roads across 2,500+ urban areas and simulated more than 44 million trips under ten different flood scenarios, from moderate (1-in-5-year) to extreme (1-in-1,000-year) events. Our modeling captures both direct road inundation and indirect disruptions, such as route failures, detours, and delays. Key findings show that even minor flooding can have major consequences. For example, in a typical 1-in-100-year flood, only 14.7 of roads are submerged—but nearly 45 of trips fail. We also identified ten global hotspot regions where clustered disruptions threaten large-scale mobility breakdowns.',
				additionalText: 'The study highlights three core factors—exposure, network connectivity, and travel behavior—as the main drivers of disruption. These insights inform actionable strategies for improving urban resilience and guiding flood mitigation investments where they’re needed most.',
				relatedPapers: [

					{
						title: 'He, Y. (2022). Mobility and resilience: A global assessment of flood impacts on road transportation networks.',
						link: 'https://openknowledge.worldbank.org/entities/publication/e06c6db7-6b99-5d61-bd86-4878996569d9'
					},
				]
			},
			{
				image: [
					'/research/GRR_01_small.jpg',
					'/research/GRR_02.jpg',
					'/research/GRR_03.jpg',
					'/research/GRR_04.jpg',
					'/research/GRR_05.jpg',
				],
				description: 'As climate change accelerates, cities around the world are facing growing threats from flooding—especially to critical infrastructure like road networks. This project provides the first globally consistent analysis of how floodwaters directly affect urban roads and how those impacts ripple through cities, disrupting mobility at scale. We analyzed over 14 million kilometers of roads across 2,500+ urban areas and simulated more than 44 million trips under ten different flood scenarios, from moderate (1-in-5-year) to extreme (1-in-1,000-year) events. Our modeling captures both direct road inundation and indirect disruptions, such as route failures, detours, and delays. Key findings show that even minor flooding can have major consequences. For example, in a typical 1-in-100-year flood, only 14.7 of roads are submerged—but nearly 45 of trips fail. We also identified ten global hotspot regions where clustered disruptions threaten large-scale mobility breakdowns.',
				additionalText: 'The study highlights three core factors—exposure, network connectivity, and travel behavior—as the main drivers of disruption. These insights inform actionable strategies for improving urban resilience and guiding flood mitigation investments where they’re needed most.',
				relatedPapers:
					[
						{
							title: 'He, Y. (2022). Mobility and resilience: A global assessment of flood impacts on road transportation networks.',
							link: 'https://openknowledge.worldbank.org/entities/publication/e06c6db7-6b99-5d61-bd86-4878996569d9'
						},
					]
			},
		]
	},

	{
		id: 'networkScience',
		title: 'Network Science',
		contentBlocks: [
			{
				image: [
					'/research/GRR_01.jpg',
					'/research/GRR_02.jpg',
					'/research/GRR_03.jpg',
					'/research/GRR_04.jpg',
					'/research/GRR_05.jpg',
				],
				description:
					'Sea level rise and storm surge inundation are major concerns in the Bay Area, affecting both communities and critical infrastructure. Our work explores multi-layer networks to understand the spatial vulnerability of oil transport systems and the cascading effects of climate-induced failures.Sea level rise and storm surge inundation are major concerns in the Bay Area, affecting both communities and critical infrastructure. Our work explores multi-layer networks to understand the spatial vulnerability of oil transport systems and the cascading effects of climate-induced failures.Sea level rise and storm surge inundation are major concerns in the Bay Area, affecting both communities and critical infrastructure. Our work explores multi-layer networks to understand the spatial vulnerability of oil transport systems and the cascading effects of climate-induced failures. Sea level rise and storm surge inundation are major concerns in the Bay Area, affecting both communities and critical infrastructure. Our work explores multi-layer networks to understand the spatial vulnerability of oil transport systems and the cascading effects of climate-induced failures.s',
				relatedPapers: [
					{
						title: 'Chen, Z. U. O., Wang, R., Hong, Y., Zhou, Y., He, Y., & Gronewold, A. D. (2024). The influence of road network topology on street flooding in New York City—A social media data approach. Journal of Hydrology, 638, 131471.',
						link: 'https://www.sciencedirect.com/science/article/pii/S0022169424008679'
					}
				]
			},
		],
	},


	{
		id: 'machineLearning',
		title: 'Machine Learning',
		contentBlocks: [
			{
				image: [
					'/research/GRR_01.jpg',
					'/research/GRR_02.jpg',
					'/research/GRR_03.jpg',
					'/research/GRR_04.jpg',
					'/research/GRR_05.jpg',
				],
				description:
					'The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities.',
				relatedPapers: [
					{
						title: 'Salgado, A., He, Y., Radke, J., Ganguly, A. R., & Gonzalez, M. C. (2024). Dimension reduction approach for understanding resource-flow resilience to climate change. Communications Physics, 7(1), 192.',
						link: 'https://www.nature.com/articles/s42005-024-01664-z'
					}
				]
			},
			{
				image: [
					'/research/GRR_01.jpg',
					'/research/GRR_02.jpg',
					'/research/GRR_03.jpg',
					'/research/GRR_04.jpg',
					'/research/GRR_05.jpg',
				],
				description:
					'The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities. The provision of urban green spaces has been widely acknowledged to offer numerous benefits to individuals and communities.',
				relatedPapers: [
					{
						title: 'Salgado, A., He, Y., Radke, J., Ganguly, A. R., & Gonzalez, M. C. (2024). Dimension reduction approach for understanding resource-flow resilience to climate change. Communications Physics, 7(1), 192.',
						link: 'https://www.nature.com/articles/s42005-024-01664-z'
					}
				]
			},

		]


	},
]


const Research = () => {
	const [activeId, setActiveId] = useState(null)

	// Dynamically create refs for each section
	const sectionRefs = useRef({})
	useEffect(() => {
		researchAreas.forEach(area => {
			if (!sectionRefs.current[area.id]) {
				sectionRefs.current[area.id] = React.createRef()
			}
		})
	}, [])



	// Scroll to section on TOC click
	const scrollToSection = (id) => {
		const ref = sectionRefs.current[id]
		if (ref?.current) {
			ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}

	// Observe scroll position to highlight active TOC item
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id)
					}
				})
			},
			{
				rootMargin: '0px 0px -60% 0px',
				threshold: 0
			}
		)

		Object.entries(sectionRefs.current).forEach(([id, ref]) => {
			if (ref.current) {

				observer.observe(ref.current)

			}
		})

		return () => observer.disconnect()
	}, [])

	return (
		<div className="research-page">
			{/* Hero Section */}
			<div className="section-background">
				<img alt=""
					src="/research/thumbnail.jpeg" className="section-image" />
				<div className="section-background-overlay"></div>
				<Typography variant="h2" className="section-title">Research</Typography>
			</div>

			<div className="research-page-wrapper">
				{/* TOC Sidebar */}
				<nav className="research-toc">
					<ul>
						{researchAreas.map(area => (
							<li
								key={area.id}
								className={activeId === area.id ?
									'active' : ''}>
								<a
									href={`#${area.id}`}
									onClick={(e) => {
										e.preventDefault()
										scrollToSection(area.id)
									}}
								>
									{area.title}
								</a>
							</li>
						))}
					</ul>
				</nav>

				{/* Research Content */}
				<div className="research-grid">
					{researchAreas.map((area) => (
						<section
							key={area.id}
							id={area.id}
							ref={sectionRefs.current[area.id]}
							className="research-section"
						>
							<h3 className="research-title">{area.title}</h3>
							{area.contentBlocks.map((block, i) => (
								<div key={i} className="research-block">
									<div className="research-left">

										<ImageSwitcher
											image={block.image}
											alt={`${area.title} - ${i}`}
										/>


										{block.relatedPapers?.length > 0 && (
											<div className="research-papers">
												<h4>Related papers:</h4>
												<ul>
													{block.relatedPapers.map((paper, j) => (
														<li key={j}>
															<a href={paper.link} target="_blank" rel="noopener noreferrer">
																{paper.title}
															</a>
														</li>
													))}
												</ul>
											</div>
										)}
									</div>

									<div className="research-right">
										<p className="research-description">{block.description}</p>
										{block.additionalText && (
											<p className="research-description">{block.additionalText}</p>
										)}
									</div>
								</div>
							))}
						</section>
					))}

				</div>
			</div>
		</div>
	)
}

export default Research

