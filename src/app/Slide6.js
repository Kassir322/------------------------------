import React from 'react'

export default function Slide6() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center bg-[#fefefe] p-12">
			<div className="max-w-5xl w-full">
				<h1 className="text-4xl font-bold mb-10 text-center text-[#000]">
					Кейс: РЖД — ВСМ Москва-Казань
					<span className="bg-[#377dff] ml-5 px-2 text-4xl rounded-md text-white">
						6
					</span>
				</h1>
				
				<div className="grid grid-cols-3 gap-6 mb-6">
					<div className="bg-[#e8f4fd] p-6 rounded-xl text-center">
						<p className="text-4xl mb-2">💰</p>
						<p className="text-3xl font-bold text-[#377dff] mb-2">1.5 трлн ₽</p>
						<p className="text-lg">Бюджет проекта</p>
					</div>
					<div className="bg-[#e8f4fd] p-6 rounded-xl text-center">
						<p className="text-4xl mb-2">🚄</p>
						<p className="text-3xl font-bold text-[#377dff] mb-2">770 км</p>
						<p className="text-lg">Протяженность трассы</p>
					</div>
					<div className="bg-[#e8f4fd] p-6 rounded-xl text-center">
						<p className="text-4xl mb-2">⚡</p>
						<p className="text-3xl font-bold text-[#377dff] mb-2">400 км/ч</p>
						<p className="text-lg">Скорость движения</p>
					</div>
				</div>
				
				<div className="grid grid-cols-2 gap-8">
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<h3 className="text-xl font-semibold mb-4 text-[#377dff]">Особенности инициации</h3>
						<ul className="space-y-2 text-base">
							<li>✓ Многоуровневое согласование (Правительство РФ, регионы)</li>
							<li>✓ Комплексное ТЭО с горизонтом 30 лет</li>
							<li>✓ Анализ макроэкономических эффектов</li>
							<li>✓ Оценка социального и экологического влияния</li>
							<li>✓ Проработка международного опыта (Китай, Япония)</li>
						</ul>
					</div>
					
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<h3 className="text-xl font-semibold mb-4 text-[#377dff]">ТЭО включало</h3>
						<ul className="space-y-2 text-base">
							<li>• Прогноз пассажиропотока на 30 лет</li>
							<li>• Геологические изыскания</li>
							<li>• Технологический аудит (выбор подвижного состава)</li>
							<li>• Финансовая модель с NPV, IRR</li>
							<li>• Анализ альтернативных маршрутов</li>
							<li>• Риски природных катастроф</li>
						</ul>
					</div>
				</div>
				
				<div className="bg-[#377dff] text-white p-4 rounded-xl text-center mt-6">
					<p className="text-lg font-semibold">
						В мегапроектах инициация может занимать до 2-3 лет и включать сотни экспертиз
					</p>
				</div>
			</div>
		</div>
	)
}
