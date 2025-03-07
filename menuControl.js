var menuTimer;

        function showMenu() {
            clearTimeout(menuTimer);
            var submenu = document.getElementById('submenu1');
            submenu.style.display = 'block';

            // Get the bounding rectangles of the menu and submenu
            var menuBounds = document.querySelector('.menu').getBoundingClientRect();
            var submenuBounds = submenu.getBoundingClientRect();

            // Calculate the horizontal position of the submenu
            if (menuBounds.left < submenuBounds.width) {
                // If the menu is close to the left edge of the viewport, align the submenu to the right of the menu
                submenu.style.left = menuBounds.width + 'px';
            } else {
                // Otherwise, align the submenu to the left of the menu
                submenu.style.left = -submenuBounds.width + 'px';
            }

            // Calculate the vertical position of the submenu
            if (menuBounds.bottom + submenuBounds.height > window.innerHeight) {
                // If the submenu extends beyond the bottom edge of the viewport, position it above the menu
                submenu.style.top = -submenuBounds.height + 'px';
            } else {
                // Otherwise, position it below the menu
                submenu.style.top = '100%';
            }
        }

        function hideMenu() {
            menuTimer = setTimeout(function () {
                document.getElementById('submenu1').style.display = 'none';
            }, 200); // Delay hiding the menu to allow the user to move the mouse to the submenu
        }

        function toggleSubMenu() {
            var submenu = document.getElementById('submenu1');
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        }

        function toggleFullStory() {
            var moreText = document.getElementById("more");
            var btnText = document.getElementById("fullStoryBtn");

            if (moreText.style.height === "0px" || moreText.style.height === "") {
                // If the content is hidden or has no height style (initial state)
                moreText.style.display = "block"; // Show the content immediately
                var height = moreText.scrollHeight + "px"; // Get the full height of the content
                moreText.style.height = height; // Expand height to full for smooth animation
                btnText.innerHTML = "Hide Story";
            } else {
                // If the content is currently visible
                moreText.style.height = "0px"; // Collapse height to 0 for animation
                btnText.innerHTML = "Full Story";
                setTimeout(function () {
                    moreText.style.display = "none"; // Hide content after animation completes
                }, 300); // Wait for animation duration (300ms)
            }
        }