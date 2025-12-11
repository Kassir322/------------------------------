import React from 'react'

export default function Slide9() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center bg-[#fefefe] p-12">
			<div className="max-w-5xl w-full">
				<h1 className="text-4xl font-bold mb-10 text-center text-[#000]">
					Выводы
					<span className="bg-[#377dff] ml-5 px-2 text-4xl rounded-md text-white">
						9
					</span>
				</h1>
				
				<div className="space-y-6">
					<div className="bg-[#e8f4fd] p-6 rounded-xl">
						<div className="flex items-start gap-4">
							<span className="text-4xl">1️⃣</span>
							<div>
								<h3 className="text-2xl font-semibold mb-2 text-[#377dff]">Инициация — фундамент успеха</h3>
								<p className="text-lg text-black">Качественная инициация предотвращает до 80% провалов проектов. Время, потраченное на планирование, окупается многократно.</p>
							</div>
						</div>
					</div>
					
					<div className="bg-[#e8f4fd] p-6 rounded-xl">
						<div className="flex items-start gap-4">
							<span className="text-4xl">2️⃣</span>
							<div>
								<h3 className="text-2xl font-semibold mb-2 text-[#377dff]">Разные проекты — разные подходы</h3>
								<p className="text-lg text-black">ВКонтакте запустился за 3 месяца с минимальным бюджетом. Яндекс.Дзен потратил полгода на разработку алгоритмов. Оба успешны, но подходы разные.</p>
							</div>
						</div>
					</div>
					
					<div className="bg-[#e8f4fd] p-6 rounded-xl">
						<div className="flex items-start gap-4">
							<span className="text-4xl">3️⃣</span>
							<div>
								<h3 className="text-2xl font-semibold mb-2 text-[#377dff]">Документы помогают не ошибиться</h3>
								<p className="text-lg text-black">Устав, бизнес-кейс, реестр стейкхолдеров — это не бюрократия, а инструменты для осознанных решений.</p>
							</div>
						</div>
					</div>
					
					<div className="bg-[#e8f4fd] p-6 rounded-xl">
						<div className="flex items-start gap-4">
							<span className="text-4xl">4️⃣</span>
							<div>
								<h3 className="text-2xl font-semibold mb-2 text-[#377dff]">Люди важнее документов</h3>
								<p className="text-lg text-black">Понимание интересов заинтересованных сторон и их поддержка — ключ к успеху любого проекта.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
