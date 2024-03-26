<script>
  function toggleReply(replyInputId, repliesId, expandCollapseBtnId) {
    var replyInput = document.getElementById(replyInputId);
    var repliesContainer = document.getElementById(repliesId);
    var expandCollapseBtn = document.getElementById(expandCollapseBtnId);

    replyInput.style.display = replyInput.style.display === 'none' ? 'block' : 'none';
    // Hide replies when a new reply is added
    repliesContainer.style.display = 'none';
    // Change the Expand/Collapse button text to "Expand" when new replies are added
    expandCollapseBtn.innerHTML = '<i class="fas fa-chevron-down"></i> Expand Replies';
  }

  function toggleReplies(repliesId, expandCollapseBtnId) {
    var repliesContainer = document.getElementById(repliesId);
    var expandCollapseBtn = document.getElementById(expandCollapseBtnId);

    repliesContainer.style.display = repliesContainer.style.display === 'none' ? 'block' : 'none';
    // Toggle the text of the Expand/Collapse button
    expandCollapseBtn.innerHTML = repliesContainer.style.display === 'none' ? '<i class="fas fa-chevron-down"></i> Expand Replies' : '<i class="fas fa-chevron-up"></i> Collapse Replies';
  }

  function submitReply(commentId, replyInputId) {
    var comment = document.getElementById(commentId);
    var replyInput = document.getElementById(replyInputId);
    var repliesContainer = document.getElementById(commentId + 'Replies');

    // Process the reply data (text and file) as needed
    var replyText = replyInput.querySelector('input[type="text"]').value;
    var fileInput = replyInput.querySelector('input[type="file"]');
    var file = fileInput.files[0];

    // Create a new reply container
    var newReply = document.createElement('div');
    newReply.className = 'reply-container comment-container';
    newReply.innerHTML = '<img src="user-avatar-placeholder.jpg" alt="User Avatar" class="user-avatar">' +
      '<div class="comment-content">' +
      '<p class="comment-text">' + replyText + '</p>' +
      '<p class="comment-info">New User • Just now</p>' +
      '<div class="button-container">' +
      '<span class="button" onclick="toggleReply(\'replyInput' + commentId + 'NewReply\', \'' + commentId + 'Replies\', \'' + commentId + 'ExpandCollapseBtn\')"><i class="fas fa-reply"></i> Reply</span>' +
      '<span class="button"><i class="fas fa-thumbs-up"></i> Like</span>' +
      '<span class="button"><i class="fas fa-thumbs-down"></i> Unlike</span>' +
      '</div>' +
      '<div class="reply-input" id="replyInput' + commentId + 'NewReply">' +
      '<input type="text" placeholder="Your reply...">' +
      '<input type="file" class="file-input" accept="image/*,video/*">' +
      '<button onclick="submitReply(\'' + commentId + 'NewReply\', \'replyInput' + commentId + 'NewReply\')"><i class="fas fa-paper-plane"></i> Submit</button>' +
      '</div>' +
      '</div>' +
      '</div>';

    // Display uploaded content
    if (file) {
      if (file.type.startsWith('image/')) {
        var uploadedImage = document.createElement('img');
        uploadedImage.src = URL.createObjectURL(file);
        uploadedImage.className = 'uploaded-image';
        newReply.querySelector('.comment-content').appendChild(uploadedImage);
      } else if (file.type.startsWith('video/')) {
        var embeddedVideo = document.createElement('iframe');
        embeddedVideo.src = URL.createObjectURL(file);
        embeddedVideo.className = 'embedded-video';
        newReply.querySelector('.comment-content').appendChild(embeddedVideo);
      }
    }

    // Append the new reply to the container
    repliesContainer.appendChild(newReply);

    // Reset the input fields
    replyInput.style.display = 'none';
    replyInput.querySelector('input[type="text"]').value = '';
    fileInput.value = ''; // Clear the file input
  }
</script>