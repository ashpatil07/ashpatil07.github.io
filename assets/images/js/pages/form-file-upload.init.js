var previewTemplate,dropzone,dropzonePreviewNode=document.querySelector("#dropzone-preview-list");dropzonePreviewNode.id="",dropzonePreviewNode&&(previewTemplate=dropzonePreviewNode.parentNode.innerHTML,dropzonePreviewNode.parentNode.removeChild(dropzonePreviewNode),dropzone=new Dropzone(".dropzone",{url:"https://httpbin.org/post",method:"post",previewTemplate:previewTemplate,previewsContainer:"#dropzone-preview"}));



var previewTemplate,dropzone1,dropzonePreviewNode=document.querySelector("#dropzone-preview-list1");dropzonePreviewNode.id="",dropzonePreviewNode&&(previewTemplate=dropzonePreviewNode.parentNode.innerHTML,dropzonePreviewNode.parentNode.removeChild(dropzonePreviewNode),dropzone=new Dropzone(".dropzone1",{url:"https://httpbin.org/post",method:"post",previewTemplate:previewTemplate,previewsContainer:"#dropzone-preview1"}));
