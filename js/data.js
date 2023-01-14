const skills = [
    {
        name : 'Front-End <br/> Web Development',
        value : '60',
        details : [
            {
                name : "HTML",
                value : "90"
            },
            {
                name : "CSS",
                value : "60"
            },
            {
                name : "JavaScript",
                value : "40"
            },
            {
                name : "ReactJS",
                value : "30"
            }
        ]
    },
    {
        name : 'Back-End <br/> Web Development',
        value : '30',
        details : [
            {
                name : "PHP",
                value : "30"
            },
            {
                name : "SQL",
                value : "40"
            },
            {
                name : "Python",
                value : "60"
            },
            {
                name : "Node.js",
                value : "40"
            }
        ]
    },
    {
        name : "Networking",
        value : "40",
        details : []
    },
    {
        name : "Computer A+",
        value : "70",
        details : [
            {
                name : "Hardware",
                value : "40"
            },
            {
                name : "OS",
                value : "80"
            }
        ]
    }
]

const experiences = [
    {
        topic : 'Web Development',
        color : 'neutral',
        cards : [
            {
                image : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAAuLi5OTk7AwMD7+/v19fXr6+uOjo7MzMzHx8f4+Pi6urqenp5DQ0NycnLY2NjU1NTi4uI/Pz8kJCQdHR03NzdqamphYWFLS0uamppVVVUxMTF6enoTExOqqqqkpKSHh4chISEMDAzm5ubTglZNAAAC0UlEQVR4nO3b63aiMBRA4RxUvN9aq71bO77/M46WJgSNChRmzUn392+sWYu9aEkCjDEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAJ448fDJ72mjqMNj0Maw+d3Dd4HO1ZrdKaI/vy1OiRtCWRec2RHek0eiRtSUQmtQY+i55C6dcYtxBNhS/Vh41fVRXKtPKwN9FVKIuKo7qirTCpNqgv6grlrdKgmcJCGVUY8ywaC9/LL22WorJQHsuOGCdKC2VbcsRctBbKXakBE9FbWGoz1BfFhTIo8f2Z6kJZ3vz6QHQX3twNL0V54a3dcJqoL7yxG56L/sKru+GJxFA4u/xVN1E8qCx8t4d/eTf8ZK9HW5WFXXcWL+2G3UQxGqkszO5LHK3Dd7KH9uc701VZ2DP3NiG4G07tH9/aqC1cuN/TbuB7G++XWGuh+XCJ50sbN1EcL0RqC82LzTjbDbuJ4itKb2HqTuLpbtjtKL4WBHoLzcglFnfDbqLIFnWKC83OphSWNm6i+F6Yay7suSnD2w27ieJznH2gudDcud/TfDf8ePqR6kKzdYnm9BN3WnUX5mdsk/3bndX8T1N5Yep2GdmF0+4ovMur8kJvytgbb6LwpkjthXlUx5so/GWO+sJ8BTM17nz6S1X9hXvX5VaqhYdv+gu9KeNbccsYQWE+ZWReiz+NoXD8WSg8uXUTQ2F+Dc0uOEVRFPqPYM5C4ij0HqOd3dOIpNDduDh/lBFJob35FHgcFUth9qQpCTxSjKYwXR0+D70kHU3hccrYhcbEU2gG4Tf6woXD9WHXXPel8RZdLeyFn5cGC7ML05867xu362rhBaHCfvC8/g+aKnQPPaq+jNu6pgp3trD+/1BpSVOF0+jPob0vsG76AH+sqUJ7X6DcC47/ktQonATP1/CwG9nsmz06AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+ib9+VBPz3hJ3+wAAAABJRU5ErkJggg==',
                heading : 'Project Manager',
                summary : 'At Morningstar Education',
                details : 'lorem'
            },
            {
                image : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAAuLi5OTk7AwMD7+/v19fXr6+uOjo7MzMzHx8f4+Pi6urqenp5DQ0NycnLY2NjU1NTi4uI/Pz8kJCQdHR03NzdqamphYWFLS0uamppVVVUxMTF6enoTExOqqqqkpKSHh4chISEMDAzm5ubTglZNAAAC0UlEQVR4nO3b63aiMBRA4RxUvN9aq71bO77/M46WJgSNChRmzUn392+sWYu9aEkCjDEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAJ448fDJ72mjqMNj0Maw+d3Dd4HO1ZrdKaI/vy1OiRtCWRec2RHek0eiRtSUQmtQY+i55C6dcYtxBNhS/Vh41fVRXKtPKwN9FVKIuKo7qirTCpNqgv6grlrdKgmcJCGVUY8ywaC9/LL22WorJQHsuOGCdKC2VbcsRctBbKXakBE9FbWGoz1BfFhTIo8f2Z6kJZ3vz6QHQX3twNL0V54a3dcJqoL7yxG56L/sKru+GJxFA4u/xVN1E8qCx8t4d/eTf8ZK9HW5WFXXcWL+2G3UQxGqkszO5LHK3Dd7KH9uc701VZ2DP3NiG4G07tH9/aqC1cuN/TbuB7G++XWGuh+XCJ50sbN1EcL0RqC82LzTjbDbuJ4itKb2HqTuLpbtjtKL4WBHoLzcglFnfDbqLIFnWKC83OphSWNm6i+F6Yay7suSnD2w27ieJznH2gudDcud/TfDf8ePqR6kKzdYnm9BN3WnUX5mdsk/3bndX8T1N5Yep2GdmF0+4ovMur8kJvytgbb6LwpkjthXlUx5so/GWO+sJ8BTM17nz6S1X9hXvX5VaqhYdv+gu9KeNbccsYQWE+ZWReiz+NoXD8WSg8uXUTQ2F+Dc0uOEVRFPqPYM5C4ij0HqOd3dOIpNDduDh/lBFJob35FHgcFUth9qQpCTxSjKYwXR0+D70kHU3hccrYhcbEU2gG4Tf6woXD9WHXXPel8RZdLeyFn5cGC7ML05867xu362rhBaHCfvC8/g+aKnQPPaq+jNu6pgp3trD+/1BpSVOF0+jPob0vsG76AH+sqUJ7X6DcC47/ktQonATP1/CwG9nsmz06AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+ib9+VBPz3hJ3+wAAAABJRU5ErkJggg==',
                heading : 'Senior Developer',
                summary : 'At Morningstar Website',
                details : ''
            },
            {
                image : 'https://play-lh.googleusercontent.com/7_CDXXemaH-5N7Wxaj7f0z-PMcN_Fxlcuue6I85E4MslLVt7qStc07s6t7HPXw-bOTE=w240-h480-rw',
                heading : 'Junior Developer',
                summary : 'At Ko Tine Thin',
                details : ''
            },
            {
                image : './src/img/du.jpg',
                heading : 'Co-Founder',
                summary : 'At Developers Union',
                details : ''
            }
        ]
    },
    {
        topic : 'Teaching Experience',
        color : 'neutral',
        cards : [
            {
                image : 'https://adanitcenter.com/wp-content/uploads/2022/09/office_for_ipad1.png',
                heading : 'MS Office Suite',
                summary : 'Since 2020',
                details : 'lorem'
            },
            {
                image : 'https://logos.textgiraffe.com/logos/logo-name/Maths-designstyle-birthday-m.png',
                heading : 'Maths Guide',
                summary : 'Since 2020',
                details : ''
            },
            {
                image : 'https://images.squarespace-cdn.com/content/v1/5bacca15c2ff61760b148d54/1567087216781-EGWQ1B0Q24A2DN1HUPTC/english.png',
                heading : 'English Lecturer',
                summary : 'Since 2018',
                details : ''
            },
            {
                image : 'https://ouch-cdn2.icons8.com/vZD-nOO0-rKGloPBW0WjLQF-i8hfkpa7QWY_3L4YTGA/rs:fit:684:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzAx/L2Y1ZWI5ZGEwLTM3/ZWMtNDUxYy1iODNl/LTVjMzc1NGU5NjQx/NC5zdmc.png',
                heading : 'Programming Class',
                summary : 'At Developers Union',
                details : ''
            }
        ]
    }
]