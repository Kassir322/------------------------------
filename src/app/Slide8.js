import React from 'react'

export default function Slide8() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center bg-[#fefefe] p-12">
			<div className="max-w-5xl w-full">
				<h1 className="text-4xl font-bold mb-10 text-center text-[#000]">
					Типичные ошибки инициации
					<span className="bg-[#377dff] ml-5 px-2 text-4xl rounded-md text-white">
						8
					</span>
				</h1>
				
				<div className="grid grid-cols-2 gap-6">
					<div className="space-y-4">
						<div className="bg-[#fff3cd] p-5 rounded-xl">
							<div className="flex items-start gap-3">
								<span className="text-3xl">⚠️</span>
								<div>
									<h3 className="text-lg font-semibold mb-2 text-black">Нечеткие цели</h3>
									<p className="text-sm mb-2 text-black"><span className="font-semibold">Проблема:</span> "Повысить эффективность" — как измерить?</p>
									<p className="text-sm text-green-700"><span className="font-semibold">Решение:</span> Конкретные измеримые цели (например: "+20% продаж за год")</p>
								</div>
							</div>
						</div>
						
						<div className="bg-[#fff3cd] p-5 rounded-xl">
							<div className="flex items-start gap-3">
								<span className="text-3xl">👥</span>
								<div>
									<h3 className="text-lg font-semibold mb-2 text-black">Игнорирование заинтересованных сторон</h3>
									<p className="text-sm mb-2 text-black"><span className="font-semibold">Проблема:</span> Не учли мнение пользователей</p>
									<p className="text-sm text-green-700"><span className="font-semibold">Решение:</span> Опросы и вовлечение с первого дня</p>
								</div>
							</div>
						</div>
						
						<div className="bg-[#fff3cd] p-5 rounded-xl">
							<div className="flex items-start gap-3">
								<span className="text-3xl">📊</span>
								<div>
									<h3 className="text-lg font-semibold mb-2 text-black">Слабое обоснование</h3>
									<p className="text-sm mb-2 text-black"><span className="font-semibold">Проблема:</span> "Интуитивно понятно, что нужно"</p>
									<p className="text-sm text-green-700"><span className="font-semibold">Решение:</span> Расчеты выгод и рисков с цифрами</p>
								</div>
							</div>
						</div>
					</div>
					
					<div className="space-y-4">
						<div className="bg-[#fff3cd] p-5 rounded-xl">
							<div className="flex items-start gap-3">
								<span className="text-3xl">⏱️</span>
								<div>
									<h3 className="text-lg font-semibold mb-2 text-black">Спешка с запуском</h3>
									<p className="text-sm mb-2 text-black"><span className="font-semibold">Проблема:</span> "Начнем быстрее, разберемся по ходу"</p>
									<p className="text-sm text-green-700"><span className="font-semibold">Решение:</span> Время на планирование окупается многократно</p>
								</div>
							</div>
						</div>
						
						<div className="bg-[#fff3cd] p-5 rounded-xl">
							<div className="flex items-start gap-3">
								<span className="text-3xl">🎯</span>
								<div>
									<h3 className="text-lg font-semibold mb-2 text-black">Размытые границы</h3>
									<p className="text-sm mb-2 text-black"><span className="font-semibold">Проблема:</span> Постоянно добавляются новые задачи</p>
									<p className="text-sm text-green-700"><span className="font-semibold">Решение:</span> Четко определить что входит и не входит в проект</p>
								</div>
							</div>
						</div>
						
						<div className="bg-[#fff3cd] p-5 rounded-xl">
							<div className="flex items-start gap-3">
								<span className="text-3xl">🔍</span>
								<div>
									<h3 className="text-lg font-semibold mb-2 text-black">Недооценка рисков</h3>
									<p className="text-sm mb-2 text-black"><span className="font-semibold">Проблема:</span> "У нас все будет хорошо"</p>
									<p className="text-sm text-green-700"><span className="font-semibold">Решение:</span> Список рисков и запасные планы</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="bg-[#377dff] text-white p-4 rounded-xl text-center mt-6">
					<p className="text-lg font-semibold">
						80% провалов проектов можно предотвратить на этапе инициации
					</p>
				</div>
			</div>
		</div>
	)
}
