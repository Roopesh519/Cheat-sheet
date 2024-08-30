// document.addEventListener('DOMContentLoaded', function() {
//     var codeBlocks = document.querySelectorAll('pre code');
//     codeBlocks.forEach(function(codeBlock) {
//         var button = document.createElement('button');
//         button.className = 'copy-button';
//         button.textContent = 'Copy';

//         button.addEventListener('click', function() {
//             var code = codeBlock.innerText;
//             navigator.clipboard.writeText(code).then(function() {
//                 button.textContent = 'Copied!';
//                 setTimeout(function() {
//                     button.textContent = 'Copy';
//                 }, 2000);
//             }, function() {
//                 button.textContent = 'Error';
//             });
//         });

//         var pre = codeBlock.parentNode;
//         pre.parentNode.insertBefore(button, pre);
//     });
// });
