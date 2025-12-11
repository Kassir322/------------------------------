import React from 'react'

export default function Slide10() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center bg-[#377dff] p-12">
			<div className="max-w-5xl w-full text-center">
				<h1 className="text-6xl font-bold mb-12 text-white">
					Спасибо за внимание!
				</h1>

				<div className="bg-white p-12 rounded-3xl mb-12">
					<p className="text-5xl mb-6">❓</p>
					<h2 className="text-4xl font-bold text-[#377dff] mb-6">Вопросы?</h2>
					<p className="text-xl text-gray-600">
						Готов обсудить любые аспекты инициации и концепции проектов
					</p>
				</div>

				<div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white">
					<p className="text-lg">Северо-Кавказский федеральный университет</p>
					<p className="text-lg">Ставрополь, 2025</p>
				</div>
			</div>
		</div>
	)
}
