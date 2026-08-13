import React from 'react'
import Header from './Header'
import Footer from './footer'

function About() {
	return (
		<div className="about-page">
			<Header />

			<main className="container" style={{ padding: '4rem 1rem' }}>
				<section className="about-hero">
					<h1>About Us</h1>
					<p>We build clean, minimal websites and apps that help teams grow.</p>
				</section>

				<section className="about-content" style={{ marginTop: '2rem' }}>
					<h2>Our Story</h2>
					<p>
						Crushaders Tech is a small studio focused on design and front-end development. We
						create thoughtful digital products with an emphasis on clarity and performance.
					</p>
				</section>
			</main>

			<Footer/>
		</div>
	)
}

export default About
