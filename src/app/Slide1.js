import React from 'react'

export default function Slide1() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center bg-[#fefefe] p-12">
			<div className="max-w-5xl w-full text-center">
				<div className="mb-8">
					<div className="inline-block bg-[#377dff] text-white px-6 py-2 rounded-full text-lg font-semibold mb-6">
						Управление проектами
					</div>
				</div>

				<h1 className="text-5xl font-bold mb-8 text-[#000]">
					Инициация и разработка концепции проекта
				</h1>

				<div className="bg-[#f3f5f7] p-8 rounded-xl inline-block mx-auto mt-12 text-black">
					<p className="text-xl mb-3">Выполнил: Студент группы ПМИ-м-о-25-1</p>
					<p className="text-xl mb-3">
						Северо-Кавказский федеральный университет
					</p>
					<p className="text-lg text-gray-600">Ставрополь, 2025</p>
				</div>
			</div>
		</div>
	)
}
