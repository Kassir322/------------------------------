import React from 'react'

export default function Slide11() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center bg-[#fefefe] p-12">
			<div className="max-w-5xl w-full">
				<h1 className="text-4xl font-bold mb-10 text-center text-[#000]">
					Чек-лист успешной инициации
					<span className="bg-[#377dff] ml-5 px-2 text-4xl rounded-md text-white">
						11
					</span>
				</h1>
				
				<div className="grid grid-cols-2 gap-8">
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<h3 className="text-xl font-semibold mb-4 text-[#377dff]">Документы</h3>
						<div className="space-y-3">
							<div className="flex items-start gap-3">
								<input type="checkbox" className="mt-1 w-5 h-5" />
								<span className="text-base">Устав проекта утвержден спонсором</span>
							</div>
							<div className="flex items-start gap-3">
								<input type="checkbox" className="mt-1 w-5 h-5" />
								<span className="text-base">Концепция проекта детализирована</span>
							</div>
							<div className="flex items-start gap-3">
								<input type="checkbox" className="mt-1 w-5 h-5" />
								<span className="text-base">ТЭО с финансовыми показателями (NPV, IRR, ROI)</span>
							</div>
							<div className="flex items-start gap-3">
								<input type="checkbox" className="mt-1 w-5 h-5" />
								<span className="text-base">Реестр заинтересованных сторон</span>
							</div>
							<div className="flex items-start gap-3">
								<input type="checkbox" className="mt-1 w-5 h-5" />
								<span className="text-base">Предварительный реестр рисков</span>
							</div>
						</div>
					</div>
					
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<h3 className="text-xl font-semibold mb-4 text-[#377dff]">Анализ</h3>
						<div className="space-y-3">
							<div className="flex items-start gap-3">
								<input type="checkbox" className="mt-1 w-5 h-5" />
								<span className="text-base">SMART-цели сформулированы</span>
							</div>
							<div className="flex items-start gap-3">
								<input type="checkbox" className="mt-1 w-5 h-5" />
								<span className="text-base">Границы проекта четко определены (scope)</span>
							</div>
							<div className="flex items-start gap-3">
								<input type="checkbox" className="mt-1 w-5 h-5" />
								<span className="text-base">Оценка всех типов жизнеспособности (финансовая, техническая, организационная)</span>
							</div>
							<div className="flex items-start gap-3">
								<input type="checkbox" className="mt-1 w-5 h-5" />
								<span className="text-base">Матрица власти/интереса стейкхолдеров</span>
							</div>
							<div className="flex items-start gap-3">
								<input type="checkbox" className="mt-1 w-5 h-5" />
								<span className="text-base">Анализ альтернатив проведен</span>
							</div>
						</div>
					</div>
				</div>
				
				<div className="grid grid-cols-2 gap-8 mt-6">
					<div className="bg-[#e8f4fd] p-6 rounded-xl">
						<h3 className="text-xl font-semibold mb-4 text-[#377dff]">Команда</h3>
						<div className="space-y-3">
							<div className="flex items-start gap-3">
								<input type="checkbox" className="mt-1 w-5 h-5" />
								<span className="text-base">Менеджер проекта назначен и наделен полномочиями</span>
							</div>
							<div className="flex items-start gap-3">
								<input type="checkbox" className="mt-1 w-5 h-5" />
								<span className="text-base">Спонсор проекта определен</span>
							</div>
							<div className="flex items-start gap-3">
								<input type="checkbox" className="mt-1 w-5 h-5" />
								<span className="text-base">Ключевые ресурсы идентифицированы</span>
							</div>
						</div>
					</div>
					
					<div className="bg-[#e8f4fd] p-6 rounded-xl">
						<h3 className="text-xl font-semibold mb-4 text-[#377dff]">Согласование</h3>
						<div className="space-y-3">
							<div className="flex items-start gap-3">
								<input type="checkbox" className="mt-1 w-5 h-5" />
								<span className="text-base">Получено одобрение от ключевых стейкхолдеров</span>
							</div>
							<div className="flex items-start gap-3">
								<input type="checkbox" className="mt-1 w-5 h-5" />
								<span className="text-base">Бюджет согласован и выделен</span>
							</div>
							<div className="flex items-start gap-3">
								<input type="checkbox" className="mt-1 w-5 h-5" />
								<span className="text-base">Go/No-Go решение принято</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
