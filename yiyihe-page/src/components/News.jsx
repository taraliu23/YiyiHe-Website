import React from 'react'

const newsData = [
	{
		title: 'CURA Leadership Symposium',
		date: '2025/04/08',
		description: 'Assistant Professor Yiyi He joined the CURA Leadership Symposium as a discussant for Matthew Gonser, Climate Resilience Officer for Los Angeles County.',
		link: 'https://resilience.research.gatech.edu/feature/translating-urban-resilience-lessons-cura-symposium'
	},

	{
		title: 'Tara AI Safety Initiative',
		date: '2025/04/04',
		description: 'Tara Liu is accepted into the AI Safety Initiative (AISI) research program at Georgia Tech, where she is contributing to a research paper on AI interpretability.',
		link: 'https://www.aisi.dev/'
	},

	{
		title: 'Google Guest Lecture',
		date: '2025/04/03',
		description: 'Staff AI research scientist Hongxu Ma from Google DeepMind came to the GT campus and delivered a guest lecture on "The Rise of the Data Science Assistant: LLM Agents in Action".',
		link: 'https://www.notion.so/How-LLM-Agents-Are-Revolutionizing-Data-Science-Insights-from-Dr-Hongxu-Ma-s-Lecture-1d3a6d2c901280a89136e2ee7bc88a31?pvs=4'
	},

	{
		title: 'Tara Lavender Celebration',
		date: '2025/04/01',
		description: 'Tara Liu is recognized as one of 2025 Lavender Celebration graduates.',
		link: 'https://belonging.gatech.edu/event/lavender-celebration'
	},

	{
		title: 'BBISS Faculty Fellow',
		date: '2025/02/19',
		description: 'Assistant Professor Yiyi He appointed as faculty fellow to the Brook Byers Institute for Sustainable Systems (BBISS).',
		link: 'https://research.gatech.edu/seven-appointed-bbiss-faculty-fellows'
	},

	{
		title: 'Tingyu AI Safety Fellow',
		date: '2025/02/01',
		description: 'Tara Liu is selected as one of seven AI Safety Fellows by AISI, a Georgia Tech community dedicated to ensuring that AI is developed for the benefit of the future.',
		link: 'https://www.aisi.dev/'
	},

	{
		title: 'Stanford Sustainability Accelerator Grant',
		date: '2024/12/24',
		description: 'Assistant Professor Yiyi He joined a Stanford-led team awarded a grant from the Stanford Sustainability Accelerator for their proposal, "Harnessing the Data Revolution to Mitigate Flood Impacts on Vulnerable Communities in Sub-Saharan Africa."',
		link: 'https://news.stanford.edu/stories/2025/04/sustainability-accelerator-grants-climate-adaptation-planetary-intelligence?utm_content=httpsnewsstanfordedustories202504sustainabilityacceleratorgrantsclimateadaptationplanetaryintelligence&amp;utm_source=feedotter&amp;utm_medium=email&amp;utm_campaign=int-04-20-2025&amp;mkt_tok=NjYwLVRKQy05ODQAAAGZ92jp5YY7f8ZhPOLayMbpIyR6Ll9vEBq_2DT94Q5gTlGHp-5jhT3noT8ixsCTXkkJ36Ahzb2MNAa_zCXOwZ3le_qafLN5x551o_1il-U'
	},

	{
		title: 'New Research Paper Published',
		date: '2024/12/11',
		description: 'Our paper Assessing health care access during flooding in sub-saharan Africa is published in AGU24.',
		link: 'https://www.agu.org/annual-meeting'
	},
	{
		title: 'New Research Paper Published',
		date: '2024/08/01',
		description: 'Our paper Beyond carbon: Unveiling vulnerabilities of the transportation fuel system for climate resilience is published on Energy Research & Social Science.',
		link: 'https://www.sciencedirect.com/science/article/pii/S2214629624001762'
	}
]

const News = () => {
	return (
		<div className="news">
			<h3> Vision Statement</h3>

			<div className="news-list">
				<p>
					The future demands cities that do more than survive—they must adapt, innovate, and lead. At the Resilient Futures Lab, we push the boundaries of research, technology, and policy to create urban systems that can withstand disruption and emerge stronger.

					We bring together thinkers and doers—scientists, policymakers, planners, and communities—to design solutions that harness AI, data, and cutting-edge strategies for resilience. Our work is not just about preparing for the next crisis but reimagining the built environment for a dynamic, equitable, and sustainable future.
				</p>

			</div>



			<h3> News</h3>
			<div className="news-list">
				{newsData.map((news, index) => (
					<div key={index}
						className="news-item"
					>
						<span className="news-date">{news.date}&nbsp;</span>
						<span className="news-title">{news.description}&nbsp; </span>
						<a href={news.link} target="_blank" rel="noopener noreferrer">Read more</a>
					</div>
				))}
			</div>
		</div>
	)
}

export default News
