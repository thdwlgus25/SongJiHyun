$(document).ready(() => {
    render_projects('all'); // 항상 'all' 카테고리로 시작
});

let render_projects = () => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $('#all').addClass('white-button-hover'); // 항상 All 버튼에 하이라이트

    let projects_obj = [
        {
            image: 'assets/images/GUI_main.png',
            link: 'https://github.com/abhn/Mporter',
            title: '자바 GUI 병원 시스템',
            demo: false,
            technologies: ['JAVA', 'DATABASE', 'GUI'],
            description: "JAVA Swing을 사용하여 그래픽 사용자 인터페이스(GUI)로 병원 시스템을 구현하였습니다.",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/JSP_main.png',
            link: 'https://github.com/abhn/Wall-E',
            title: '24시 약국 사이트',
            demo: false,
            technologies: ['JAVA', 'JSP', 'DATABASE'],
            description: "응급 상황에서의 신속한 서비스 제공이라는 현실적인 문제에 대한 중점을 둔 프로젝트입니다. ",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/GUI2_main.png',
            link: 'https://github.com/abhn/Marvel',
            title: '끝말잇기 게임',
            demo: false,
            technologies: ['JAVA', 'GUI'],
            description: "사용자들에게 몰입감을 제공하는 동시에, 직관적인 디자인을 제공하여 사용자 친화적인 인터페이스를 구현한 프로젝트입니다.",
            categories: ['featured', 'native']
        },
        {
            image: 'assets/images/YULO_main.png',
            link: 'https://github.com/weekendact/YULO_Back',
            title: '사용자 맞춤 지능형 CCTV 관제 서비스',
            demo: false,
            technologies: ['SPRINGBOOT', 'DATABASE','REACT','PYTHON','YOLO'],
            description: "사용자가 선택한 AI 모델을 활용하여 웹 플랫폼을 통해 기존 지능형 CCTV 시스템에서 다루지 못하는 영역까지 구현한 프로젝트입니다.",
            categories: ['featured', 'security']
        },
        {
            image: 'assets/images/social-share-count.jpeg',
            link: 'https://github.com/YULOTeam/Yulo_Server',
            title: '스마트 캠퍼스 안전 시스템',
            demo: false,
            technologies: ['SPRINGBOOT','PASTAPI','THYMELEAF'],
            description: "여기에다가써야대",
            categories: ['native']
        },
    ];

    let projects = projects_obj.map(project_mapper);
    projects_area.hide().html(projects).fadeIn(); // 모든 프로젝트 표시
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `;
}
