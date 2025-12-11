import React from 'react'

export default function Slide10() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center bg-[#fefefe] p-12">
			<div className="max-w-5xl w-full">
				<h1 className="text-4xl font-bold mb-10 text-center text-[#000]">
					Типичные ошибки инициации
					<span className="bg-[#377dff] ml-5 px-2 text-4xl rounded-md text-white">
						10
					</span>
				</h1>
				
				<div className="grid grid-cols-2 gap-6">
					<div className="space-y-4">
						<div className="bg-[#fff3cd] p-5 rounded-xl">
							<div className="flex items-start gap-3">
								<span className="text-3xl">⚠️</span>
								<div>
									<h3 className="text-lg font-semibold mb-2">Нечеткие цели</h3>
									<p className="text-sm mb-2"><span className="font-semibold">Проблема:</span> "Повысить эффективность" — что это значит?</p>
									<p className="text-sm text-green-700"><span className="font-semibold">Решение:</span> SMART-цели с конкретными метриками</p>
								</div>
							</div>
						</div>
						
						<div className="bg-[#fff3cd] p-5 rounded-xl">
							<div className="flex items-start gap-3">
								<span className="text-3xl">👥</span>
								<div>
									<h3 className="text-lg font-semibold mb-2">Игнорирование стейкхолдеров</h3>
									<p className="text-sm mb-2"><span className="font-semibold">Проблема:</span> Не учли интересы производственников</p>
									<p className="text-sm text-green-700"><span className="font-semibold">Решение:</span> Ранний анализ и вовлечение всех групп</p>
								</div>
							</div>
						</div>
						
						<div className="bg-[#fff3cd] p-5 rounded-xl">
							<div className="flex items-start gap-3">
								<span className="text-3xl">📊</span>
								<div>
									<h3 className="text-lg font-semibold mb-2">Слабое ТЭО</h3>
									<p className="text-sm mb-2"><span className="font-semibold">Проблема:</span> Оптимистичные прогнозы без анализа рисков</p>
									<p className="text-sm text-green-700"><span className="font-semibold">Решение:</span> Консервативные оценки + сценарный анализ</p>
								</div>
							</div>
						</div>
					</div>
					
					<div className="space-y-4">
						<div className="bg-[#fff3cd] p-5 rounded-xl">
							<div className="flex items-start gap-3">
								<span className="text-3xl">⏱️</span>
								<div>
									<h3 className="text-lg font-semibold mb-2">Спешка с запуском</h3>
									<p className="text-sm mb-2"><span className="font-semibold">Проблема:</span> "Начнем быстрее, разберемся по ходу"</p>
									<p className="text-sm text-green-700"><span className="font-semibold">Решение:</span> Инвестиции в качественную инициацию окупаются</p>
								</div>
							</div>
						</div>
						
						<div className="bg-[#fff3cd] p-5 rounded-xl">
							<div className="flex items-start gap-3">
								<span className="text-3xl">🎯</span>
								<div>
									<h3 className="text-lg font-semibold mb-2">Размытые границы</h3>
									<p className="text-sm mb-2"><span className="font-semibold">Проблема:</span> Постоянное расширение scope без контроля</p>
									<p className="text-sm text-green-700"><span className="font-semibold">Решение:</span> Четкое определение что IN/OUT scope</p>
								</div>
							</div>
						</div>
						
						<div className="bg-[#fff3cd] p-5 rounded-xl">
							<div className="flex items-start gap-3">
								<span className="text-3xl">🔍</span>
								<div>
									<h3 className="text-lg font-semibold mb-2">Недооценка рисков</h3>
									<p className="text-sm mb-2"><span className="font-semibold">Проблема:</span> "У нас все будет хорошо" без плана Б</p>
									<p className="text-sm text-green-700"><span className="font-semibold">Решение:</span> Реестр рисков + митигация с первого дня</p>
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
