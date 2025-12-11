import React from 'react'

export default function Slide3() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center bg-[#fefefe] p-12">
			<div className="max-w-5xl w-full">
				<h1 className="text-4xl font-bold mb-10 text-center text-[#000]">
					Ключевые документы инициации
					<span className="bg-[#377dff] ml-5 px-2 text-4xl rounded-md text-white">
						3
					</span>
				</h1>
				
				<div className="grid grid-cols-3 gap-6">
					<div className="bg-[#f3f5f7] p-6 rounded-xl text-center">
						<div className="bg-[#377dff] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
							📋
						</div>
						<h3 className="text-xl font-semibold mb-3 text-[#377dff]">Устав проекта</h3>
						<p className="text-sm">Официально авторизует проект и наделяет полномочиями менеджера проекта</p>
					</div>
					
					<div className="bg-[#f3f5f7] p-6 rounded-xl text-center">
						<div className="bg-[#377dff] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
							💡
						</div>
						<h3 className="text-xl font-semibold mb-3 text-[#377dff]">Концепция проекта</h3>
						<p className="text-sm">Описывает видение, цели, подходы к реализации и ожидаемые результаты</p>
					</div>
					
					<div className="bg-[#f3f5f7] p-6 rounded-xl text-center">
						<div className="bg-[#377dff] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
							👥
						</div>
						<h3 className="text-xl font-semibold mb-3 text-[#377dff]">Реестр стейкхолдеров</h3>
						<p className="text-sm">Идентификация всех заинтересованных сторон и их влияния на проект</p>
					</div>
				</div>
				
				<div className="grid grid-cols-2 gap-6 mt-6">
					<div className="bg-[#e8f4fd] p-6 rounded-xl text-center">
						<div className="bg-[#377dff] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
							📊
						</div>
						<h3 className="text-xl font-semibold mb-3 text-[#377dff]">ТЭО</h3>
						<p className="text-sm">Технико-экономическое обоснование жизнеспособности проекта</p>
					</div>
					
					<div className="bg-[#e8f4fd] p-6 rounded-xl text-center">
						<div className="bg-[#377dff] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
							⚡
						</div>
						<h3 className="text-xl font-semibold mb-3 text-[#377dff]">Анализ рисков</h3>
						<p className="text-sm">Предварительная оценка угроз и возможностей проекта</p>
					</div>
				</div>
			</div>
		</div>
	)
}
