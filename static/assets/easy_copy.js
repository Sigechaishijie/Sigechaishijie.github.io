document.addEventListener("DOMContentLoaded", function() {
    // 加载 clipboard.js 库
    let clipboard_script = document.createElement('script');
    clipboard_script.type = 'text/javascript';
    clipboard_script.src = 'https://blog.sigechaishijie.us.kg/lib/clipboard.min.js';
    document.body.appendChild(clipboard_script);

    // 样式
    let style = document.createElement('style');
    style.innerHTML = `
        .markdown-body .highlight pre, .markdown-body pre {
            position: relative;
        }

        .copy_button {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: #ffffff; 
            border: 1px solid #ddd; 
            cursor: pointer;
            border-radius: 5px; 
            display: flex;
            align-items: center;
        }

        pre.notranslate .copy_button:hover {
            background-color: #f5f5f5; 
        }

        pre.notranslate .copied {
            border: 1px solid #008000; 
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            font-size: 12px;
            border-radius: 5px; 
            display: flex;
            align-items: center;
        }

        pre.notranslate .copied svg {
            color: #008000; 
        }
    `;
    document.head.appendChild(style);

    clipboard_script.onload = function() {
        // 获取所有代码块
        var code_blocks = document.querySelectorAll('pre.notranslate');

        // 遍历
        code_blocks.forEach((code_block) => {
            // 创建复制按钮
            var copy_button = create_copy_button();

            code_block.appendChild(copy_button);

            // 初始化 Clipboard.js
            var clipboard = new ClipboardJS(copy_button, {
                target: function(trigger) {
                    return code_block;
                }
            });

            // 监听成功事件
            clipboard.on('success', function(e) {
                handle_copy_success(copy_button);
                e.clearSelection();
            });

            // 监听代码块滚动事件
            code_block.addEventListener('scroll', function() {
                adjust_button_position(copy_button, code_block);
                hide_button(copy_button)
            });
        });
    };

    // 创建复制按钮
    function create_copy_button() {
        var button = document.createElement('button');
        button.innerHTML = `
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
                <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
            </svg>
        `;
        button.classList.add('copy_button');
        return button;
    }

    // 复制成功后操作
    function handle_copy_success(button) {
        button.innerHTML = `
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-copy-icon m-2">
                <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
            </svg>
        `;
        button.classList.add('copied');
        button.classList.remove('copy_button');
        setTimeout(function() {
            button.innerHTML = `
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
                    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                </svg>
            `;
            button.classList.remove('copied');
            button.classList.add('copy_button');
        }, 1000); // 1秒
    }

    // 滚动时调整按钮位置
    function adjust_button_position(button, code_block) {
        button.style.right = (10 - code_block.scrollLeft) + 'px';
    }

    // 滚动时隐藏按钮
    function hide_button(button) {
        clearTimeout(button.timeout);
        button.style.display = 'none';
        button.timeout = setTimeout(function() {
            button.style.display = 'flex';
        }, 1000);
    }
});
