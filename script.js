var typingText = document.querySelector('.text2');
var myArray = 
["Data Analyst", "Passionate Learner", "Sports Enthusiast"];
var arrayIndex = 1;

function textReplace(){
	setInterval(timer, 5000);
	function timer(){
		if(arrayIndex < myArray.length){
			typingText.innerHTML = myArray[arrayIndex];
			arrayIndex = arrayIndex + 1;
		}
		else{
			arrayIndex = 0;
			typingText.innerHTML = myArray[arrayIndex];
			arrayIndex = arrayIndex + 1;
		}
	}
}
textReplace();

var menuBtn = document.querySelector('.navbar .menu-btn');
var menuList = document.querySelector('.navbar .nav-list');
var menuListItems = document.querySelectorAll('.nav-list li a');

menuBtn.addEventListener('click', addActiveClass);

function addActiveClass(){
	menuList.classList.toggle('active');
}

for(var i = 0; i < menuListItems.length; i++){
	menuListItems[i].addEventListener('click', menuItemClicked);
}

function menuItemClicked(){
	menuList.classList.remove('active');
}


var homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 80){ //scroll over 80 px
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}

function hideAllSections() {
	document.querySelector('.front-end').classList.remove('active');
	document.querySelector('.front-end').classList.add('hidden');
	document.querySelector('.back-end').classList.remove('active');
	document.querySelector('.back-end').classList.add('hidden');
	document.querySelector('.Other').classList.remove('active');
	document.querySelector('.Other').classList.add('hidden');
}

function FrontClick() {
	hideAllSections();
	document.querySelector('.front-end').classList.remove('hidden');
	document.querySelector('.front-end').classList.add('active');
}

function BackClick() {
	hideAllSections();
	document.querySelector('.back-end').classList.remove('hidden');
	document.querySelector('.back-end').classList.add('active');
}

function OtherClick() {
	hideAllSections();
	document.querySelector('.Other').classList.remove('hidden');
	document.querySelector('.Other').classList.add('active');
}


// 當頁面加載完成時，預設顯示 Front-end
document.addEventListener('DOMContentLoaded', function() {
	// 設置進度條
	const bars = document.querySelectorAll('.bar-front, .bar-back, .bar-other');
	bars.forEach(bar => {
		const percent = bar.getAttribute('data-percent');
		bar.style.width = percent;
	});

	// 預設顯示 Front-end
	document.querySelector('.front-end').classList.remove('hidden');
	document.querySelector('.front-end').classList.add('active');

	
});

// 等待 DOM 完全加载
document.addEventListener('DOMContentLoaded', function() {
	// 获取所有时间线导航按钮
	const timelineButtons = document.querySelectorAll('.timeline-nav-btn');
	
	// 为每个按钮添加点击事件监听器
	timelineButtons.forEach(button => {
		button.addEventListener('click', function() {
			// 移除所有按钮的 active 类
			timelineButtons.forEach(btn => btn.classList.remove('active'));
			
			// 为当前点击的按钮添加 active 类
			this.classList.add('active');
			
			// 获取当前按钮对应的年份
			const year = this.getAttribute('data-year');
			
			// 获取所有内容项
			const contentItems = document.querySelectorAll('.timeline-content-item');
			
			// 隐藏所有内容项
			contentItems.forEach(item => item.classList.remove('active'));
			
			// 显示对应年份的内容项
			const targetContent = document.querySelector(`.timeline-content-item[data-year="${year}"]`);
			if (targetContent) {
				targetContent.classList.add('active');
			}
		});
	});
});
// otehr experience section started
const buttons = document.querySelectorAll('.activity-btn');
const timelineItems = document.querySelectorAll('.horizontal-timeline-item');

buttons.forEach(btn => {
	btn.addEventListener('click', () => {
		// 移除所有按鈕的 active 類
		buttons.forEach(b => b.classList.remove('active'));
		// 添加當前按鈕的 active 類
		btn.classList.add('active');

		// 隱藏所有 timeline items
		timelineItems.forEach(item => {
			item.style.display = 'none';
			item.classList.remove('active');
		});

		// 顯示對應的 timeline item
		const activity = btn.getAttribute('data-activity');
		const targetItem = document.querySelector(`.horizontal-timeline-item[data-activity="${activity}"]`);
		if (targetItem) {
			targetItem.style.display = 'block';
			targetItem.classList.add('active');
			
			// 重新初始化該項目中的 Read More 功能
			initReadMore(targetItem);
		}
	});
});

// 初始化 Read More 功能的函數
function initReadMore(container) {
	const timelineInfos = container.querySelectorAll('.timeline-info');
	
	timelineInfos.forEach(info => {
		const existingBtn = info.querySelector('.read-more-btn');
		if (existingBtn) {
			existingBtn.remove();
		}

		const content = info.querySelector('p');
		if (content && content.scrollHeight > 60) {
			const readMoreBtn = document.createElement('button');
			readMoreBtn.className = 'read-more-btn';
			readMoreBtn.textContent = 'Read More';
			
			readMoreBtn.addEventListener('click', () => {
				if (info.classList.contains('expanded')) {
					info.classList.remove('expanded');
					readMoreBtn.textContent = 'Read More';
					content.style.maxHeight = '60px'; // 收起时设置最大高度
					content.style.overflow = 'hidden';
				} else {
					info.classList.add('expanded');
					readMoreBtn.textContent = 'Show Less';
					content.style.maxHeight = '300px'; // 展开时设置最大高度
					content.style.overflow = 'auto'; // 添加滚动条
				}
			});

			info.appendChild(readMoreBtn);
		}
	});
}

// 初始化第一個活動項目的 Read More 功能
const firstItem = document.querySelector('.horizontal-timeline-item.active');
if (firstItem) {
	initReadMore(firstItem);
}

document.addEventListener('DOMContentLoaded', function() {
	const buttons = document.querySelectorAll('.activity-btn');
	const timelineItems = document.querySelectorAll('.horizontal-timeline-item');

	// 初始化：顯示第一個項目
	if (timelineItems.length > 0) {
		timelineItems[0].style.display = 'flex';
		initReadMore(timelineItems[0]);
	}

	buttons.forEach(btn => {
		btn.addEventListener('click', () => {
			buttons.forEach(b => b.classList.remove('active'));
			btn.classList.add('active');

			timelineItems.forEach(item => {
				item.style.display = 'none';
				// 重置所有展開狀態
				const timelineInfos = item.querySelectorAll('.timeline-info');
				timelineInfos.forEach(info => {
					info.classList.remove('expanded');
					const btn = info.querySelector('.read-more-btn');
					if (btn) btn.textContent = 'Read More';
				}); 
			});

			const activity = btn.getAttribute('data-activity');
			const targetItem = document.querySelector(`.horizontal-timeline-item[data-activity="${activity}"]`);
			if (targetItem) {
				targetItem.style.display = 'flex';
				initReadMore(targetItem);
			}
		});
	});

	function initReadMore(container) {
		const timelineInfos = container.querySelectorAll('.timeline-info');
		
		timelineInfos.forEach(info => {
			const existingBtn = info.querySelector('.read-more-btn');
			if (existingBtn) {
				existingBtn.remove();
			}

			const content = info.querySelector('p');
			if (content && content.scrollHeight > 60) {
				const readMoreBtn = document.createElement('button');
				readMoreBtn.className = 'read-more-btn';
				readMoreBtn.textContent = 'Read More';
				
				readMoreBtn.addEventListener('click', () => {
					if (info.classList.contains('expanded')) {
						info.classList.remove('expanded');
						readMoreBtn.textContent = 'Read More';
						content.style.maxHeight = '60px'; // 收起时设置最大高度
						content.style.overflow = 'hidden';
					} else {
						info.classList.add('expanded');
						readMoreBtn.textContent = 'Show Less';
						content.style.maxHeight = '300px'; // 展开时设置最大高度
						content.style.overflow = 'auto'; // 添加滚动条
					}
				});

				info.appendChild(readMoreBtn);
			}
		});
	}
});

