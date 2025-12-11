import React from 'react'

export default function Slide12() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center bg-[#fefefe] p-12">
			<div className="max-w-5xl w-full">
				<h1 className="text-4xl font-bold mb-10 text-center text-[#000]">
					Выводы
					<span className="bg-[#377dff] ml-5 px-2 text-4xl rounded-md text-white">
						12
					</span>
				</h1>
				
				<div className="space-y-6">
					<div className="bg-[#e8f4fd] p-6 rounded-xl">
						<div className="flex items-start gap-4">
							<span className="text-4xl">1️⃣</span>
							<div>
								<h3 className="text-2xl font-semibold mb-2 text-[#377dff]">Инициация — фундамент успеха</h3>
								<p className="text-lg">Качественная инициация предотвращает до 80% провалов проектов. Инвестиции времени на этом этапе многократно окупаются.</p>
							</div>
						</div>
					</div>
					
					<div className="bg-[#e8f4fd] p-6 rounded-xl">
						<div className="flex items-start gap-4">
							<span className="text-4xl">2️⃣</span>
							<div>
								<h3 className="text-2xl font-semibold mb-2 text-[#377dff]">Практика подтверждает теорию</h3>
								<p className="text-lg">Кейсы Газпром Нефть, РЖД и Росатом демонстрируют: успешные компании тщательно прорабатывают все аспекты инициации, адаптируя международные стандарты под российские реалии.</p>
							</div>
						</div>
					</div>
					
					<div className="bg-[#e8f4fd] p-6 rounded-xl">
						<div className="flex items-start gap-4">
							<span className="text-4xl">3️⃣</span>
							<div>
								<h3 className="text-2xl font-semibold mb-2 text-[#377dff]">Баланс стандартов и гибкости</h3>
								<p className="text-lg">PMBOK, PRINCE2, ISO 21500 предоставляют общие принципы. Задача менеджера — адаптировать их под специфику проекта, не теряя фокус на ключевых элементах инициации.</p>
							</div>
						</div>
					</div>
					
					<div className="bg-[#e8f4fd] p-6 rounded-xl">
						<div className="flex items-start gap-4">
							<span className="text-4xl">4️⃣</span>
							<div>
								<h3 className="text-2xl font-semibold mb-2 text-[#377dff]">Стейкхолдеры решают все</h3>
								<p className="text-lg">Игнорирование интересов заинтересованных сторон — самая частая причина провала. Ранний анализ и вовлечение критичны для успеха.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
