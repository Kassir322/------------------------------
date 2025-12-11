import React from 'react'

export default function Slide5() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center bg-[#fefefe] p-12">
			<div className="max-w-5xl w-full">
				<h1 className="text-4xl font-bold mb-10 text-center text-[#000]">
					Анализ заинтересованных сторон
					<span className="bg-[#377dff] ml-5 px-2 text-4xl rounded-md text-white">
						5
					</span>
				</h1>
				
				<div className="grid grid-cols-2 gap-8 mb-6">
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<h3 className="text-2xl font-semibold mb-6 text-center text-[#377dff]">Матрица власти/интереса</h3>
						<div className="grid grid-cols-2 gap-3 text-center text-sm">
							<div className="bg-[#e8f4fd] p-4 rounded-lg">
								<p className="font-semibold mb-2">Высокая власть<br/>Высокий интерес</p>
								<p className="text-xs">Управлять вплотную</p>
							</div>
							<div className="bg-white p-4 rounded-lg border-2 border-[#377dff]">
								<p className="font-semibold mb-2">Низкая власть<br/>Высокий интерес</p>
								<p className="text-xs">Держать информированными</p>
							</div>
							<div className="bg-white p-4 rounded-lg border-2 border-gray-300">
								<p className="font-semibold mb-2">Высокая власть<br/>Низкий интерес</p>
								<p className="text-xs">Держать удовлетворенными</p>
							</div>
							<div className="bg-gray-200 p-4 rounded-lg">
								<p className="font-semibold mb-2">Низкая власть<br/>Низкий интерес</p>
								<p className="text-xs">Мониторить</p>
							</div>
						</div>
					</div>
					
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<h3 className="text-2xl font-semibold mb-4 text-center text-[#377dff]">Пример: Газпром Нефть</h3>
						<div className="space-y-3">
							<div className="bg-[#e8f4fd] p-3 rounded-lg">
								<p className="font-semibold">Руководство компании</p>
								<p className="text-sm">Стратегия: Еженедельные отчеты + демонстрация ROI</p>
							</div>
							<div className="bg-white p-3 rounded-lg border-2 border-[#377dff]">
								<p className="font-semibold">Производственные подразделения</p>
								<p className="text-sm">Стратегия: Обучение + вовлечение в пилот</p>
							</div>
							<div className="bg-white p-3 rounded-lg border-2 border-gray-300">
								<p className="font-semibold">IT-департамент</p>
								<p className="text-sm">Стратегия: Техническая поддержка + делегирование</p>
							</div>
							<div className="bg-gray-200 p-3 rounded-lg">
								<p className="font-semibold">Подрядчики</p>
								<p className="text-sm">Стратегия: Информирование по мере необходимости</p>
							</div>
						</div>
					</div>
				</div>
				
				<div className="bg-[#377dff] text-white p-4 rounded-xl text-center">
					<p className="text-lg font-semibold">
						Игнорирование интересов ключевых стейкхолдеров — частая причина провала проектов
					</p>
				</div>
			</div>
		</div>
	)
}
