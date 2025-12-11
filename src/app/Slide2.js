import React from 'react'

export default function Slide2() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center bg-[#fefefe] p-12">
			<div className="max-w-5xl w-full">
				<h1 className="text-4xl font-bold mb-10 text-center text-[#000]">
					Зачем нужна инициация проекта?
					<span className="bg-[#377dff] ml-5 px-2 text-4xl rounded-md text-white">
						2
					</span>
				</h1>

				<div className="grid grid-cols-2 gap-8 mb-8 text-black">
					<div className="bg-[#fff3cd] p-6 rounded-xl">
						<div className="text-5xl mb-4 text-center">⚠️</div>
						<h3 className="text-2xl font-semibold mb-4 text-center">
							Статистика провалов
						</h3>
						<ul className="space-y-3 text-lg">
							<li>• 70% проектов терпят неудачу из-за плохой инициации</li>
							<li>• Средний перерасход бюджета: 27%</li>
							<li>• Задержка сроков: в среднем 40%</li>
						</ul>
					</div>

					<div className="bg-[#e8f4fd] p-6 rounded-xl">
						<div className="text-5xl mb-4 text-center">🎯</div>
						<h3 className="text-2xl font-semibold mb-4 text-center">
							Ключевые риски
						</h3>
						<ul className="space-y-3 text-lg">
							<li>• Нечеткие цели и границы проекта</li>
							<li>• Игнорирование интересов заинтересованных сторон</li>
							<li>• Отсутствие оценки жизнеспособности</li>
						</ul>
					</div>
				</div>

				<div className="bg-[#377dff] text-white p-6 rounded-xl text-center">
					<p className="text-2xl font-semibold">
						Качественная инициация = 50% успеха проекта
					</p>
				</div>
			</div>
		</div>
	)
}
