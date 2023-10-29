$(document).ready(function () {
    function openImageModal(imageSrc) {
        // Get the image elements in the carousel
        const carouselImages = document.querySelectorAll('#imageCarousel .carousel-item img');

        // Loop through the images to find the one with the matching src
        for (let i = 0; i < carouselImages.length; i++) {
            if (carouselImages[i].src.includes(imageSrc)) {
                // Set the corresponding carousel item as active
                carouselImages[i].closest('.carousel-item').classList.add('active');
            }
        }

        // Show the modal
        $('#imageModal').modal('show');
    }

    // click event of modal images to trigger the modal
    $('.modal-image').click(function () {
        const imageSrc = $(this).attr('src');
        openImageModal(imageSrc);
    });

    $('#imageModal').on('shown.bs.modal', function () {
        $('#imageCarousel').carousel();
    });

    $('#imageModal').on('hidden.bs.modal', function () {
        // Reset the modal carousel by removing the 'active' class
        $('#imageCarousel .carousel-item').removeClass('active');
    });
});