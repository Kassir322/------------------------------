import React from 'react'

export default function Slide4() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center bg-[#fefefe] p-12">
			<div className="max-w-5xl w-full">
				<h1 className="text-4xl font-bold mb-10 text-center text-[#000]">
					Анализ заинтересованных сторон
					<span className="bg-[#377dff] ml-5 px-2 text-4xl rounded-md text-white">
						4
					</span>
				</h1>
				
				<div className="bg-[#e8f4fd] p-4 rounded-xl mb-6 text-center">
					<p className="text-lg text-[#000]">
						<span className="font-semibold">Заинтересованные стороны</span> (стейкхолдеры) — это люди или организации, которые влияют на проект или на которых влияет проект
					</p>
				</div>
				
				<div className="grid grid-cols-2 gap-8 mb-6">
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<h3 className="text-2xl font-semibold mb-6 text-center text-[#377dff]">Матрица власти/интереса</h3>
						<div className="grid grid-cols-2 gap-3 text-center text-sm">
							<div className="bg-[#e8f4fd] p-4 rounded-lg">
								<p className="font-semibold mb-2 text-black">Высокая власть<br/>Высокий интерес</p>
								<p className="text-xs text-black">Управлять вплотную</p>
							</div>
							<div className="bg-white p-4 rounded-lg border-2 border-[#377dff]">
								<p className="font-semibold mb-2 text-black">Низкая власть<br/>Высокий интерес</p>
								<p className="text-xs text-black">Держать информированными</p>
							</div>
							<div className="bg-white p-4 rounded-lg border-2 border-gray-300">
								<p className="font-semibold mb-2 text-black">Высокая власть<br/>Низкий интерес</p>
								<p className="text-xs text-black">Держать удовлетворенными</p>
							</div>
							<div className="bg-gray-200 p-4 rounded-lg">
								<p className="font-semibold mb-2 text-black">Низкая власть<br/>Низкий интерес</p>
								<p className="text-xs text-black">Мониторить</p>
							</div>
						</div>
					</div>
					
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<h3 className="text-2xl font-semibold mb-4 text-center text-[#377dff]">Пример: Яндекс.Дзен</h3>
						<div className="space-y-3">
							<div className="bg-[#e8f4fd] p-3 rounded-lg">
								<p className="font-semibold text-black">Топ-менеджмент Яндекса</p>
								<p className="text-sm text-black">Стратегия: Регулярные отчеты + демонстрация роста аудитории</p>
							</div>
							<div className="bg-white p-3 rounded-lg border-2 border-[#377dff]">
								<p className="font-semibold text-black">Издатели контента</p>
								<p className="text-sm text-black">Стратегия: Программа партнерства + обучение</p>
							</div>
							<div className="bg-white p-3 rounded-lg border-2 border-gray-300">
								<p className="font-semibold text-black">IT-команда разработки</p>
								<p className="text-sm text-black">Стратегия: Техническая поддержка + ресурсы</p>
							</div>
							<div className="bg-gray-200 p-3 rounded-lg">
								<p className="font-semibold text-black">Рекламодатели</p>
								<p className="text-sm text-black">Стратегия: Информирование о возможностях</p>
							</div>
						</div>
					</div>
				</div>
				
				<div className="bg-[#377dff] text-white p-4 rounded-xl text-center">
					<p className="text-lg font-semibold">
						Успех проекта зависит от поддержки ключевых заинтересованных сторон
					</p>
				</div>
			</div>
		</div>
	)
}
