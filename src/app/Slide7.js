import React from 'react'

export default function Slide7() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center bg-[#fefefe] p-12">
			<div className="max-w-5xl w-full">
				<h1 className="text-4xl font-bold mb-10 text-center text-[#000]">
					Ключевые документы инициации
					<span className="bg-[#377dff] ml-5 px-2 text-4xl rounded-md text-white">
						7
					</span>
				</h1>
				
				<div className="grid grid-cols-2 gap-6">
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<div className="bg-[#377dff] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
							📋
						</div>
						<h3 className="text-xl font-semibold mb-3 text-center text-[#377dff]">Устав проекта</h3>
						<p className="text-base mb-3 text-black">Официальный документ, который разрешает начать проект</p>
						<div className="bg-white p-4 rounded-lg">
							<p className="text-sm font-semibold mb-2 text-black">Содержит:</p>
							<ul className="space-y-1 text-sm text-black">
								<li>• Цели и границы проекта</li>
								<li>• Бюджет и сроки</li>
								<li>• Назначение руководителя</li>
								<li>• Основные риски</li>
							</ul>
						</div>
					</div>
					
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<div className="bg-[#377dff] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
							💡
						</div>
						<h3 className="text-xl font-semibold mb-3 text-center text-[#377dff]">Концепция проекта</h3>
						<p className="text-base mb-3 text-black">Описание идеи проекта и способов ее реализации</p>
						<div className="bg-white p-4 rounded-lg">
							<p className="text-sm font-semibold mb-2 text-black">Включает:</p>
							<ul className="space-y-1 text-sm text-black">
								<li>• Видение результата</li>
								<li>• Подходы к реализации</li>
								<li>• Ожидаемые выгоды</li>
								<li>• Альтернативные варианты</li>
							</ul>
						</div>
					</div>
					
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<div className="bg-[#377dff] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
							📊
						</div>
						<h3 className="text-xl font-semibold mb-3 text-center text-[#377dff]">Бизнес-кейс</h3>
						<p className="text-base mb-3 text-black">Обоснование: почему проект нужен и выгоден</p>
						<div className="bg-white p-4 rounded-lg">
							<p className="text-sm font-semibold mb-2 text-black">Отвечает на вопросы:</p>
							<ul className="space-y-1 text-sm text-black">
								<li>• Какую проблему решаем?</li>
								<li>• Сколько это стоит?</li>
								<li>• Какая будет выгода?</li>
								<li>• Когда окупится?</li>
							</ul>
						</div>
					</div>
					
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<div className="bg-[#377dff] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
							👥
						</div>
						<h3 className="text-xl font-semibold mb-3 text-center text-[#377dff]">Реестр стейкхолдеров</h3>
						<p className="text-base mb-3 text-black">Список всех заинтересованных сторон проекта</p>
						<div className="bg-white p-4 rounded-lg">
							<p className="text-sm font-semibold mb-2 text-black">Для каждого указано:</p>
							<ul className="space-y-1 text-sm text-black">
								<li>• Степень влияния на проект</li>
								<li>• Интерес к проекту</li>
								<li>• Ожидания от проекта</li>
								<li>• Стратегия взаимодействия</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
