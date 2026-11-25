// =========================================
// PRODUCTPRO — JAVASCRIPT
// =========================================


// =========================================
// LUCIDE ICONS
// =========================================

lucide.createIcons();


// =========================================
// SIDEBAR ACTIVE STATE
// =========================================

document.querySelectorAll('.nav-item').forEach(item => {

    item.addEventListener('click', e => {

        e.preventDefault();

        document.querySelectorAll('.nav-item')
            .forEach(i => i.classList.remove('active'));

        item.classList.add('active');

    });

});


// =========================================
// TOPBAR SEARCH
// =========================================

const topSearch = document.querySelector('.search-box input');

if (topSearch) {

    topSearch.addEventListener('input', e => {

        const query = e.target.value.toLowerCase().trim();

        document.querySelectorAll('.products-table tbody tr')
            .forEach(row => {

                const text = row.textContent.toLowerCase();

                row.style.display =
                    text.includes(query) ? '' : 'none';

            });

    });

}


// =========================================
// PRODUCT TABLE SEARCH
// =========================================

const productSearch = document.getElementById('productSearch');

if (productSearch) {

    productSearch.addEventListener('input', e => {

        const query = e.target.value.toLowerCase().trim();

        document.querySelectorAll('.products-table tbody tr')
            .forEach(row => {

                const text = row.textContent.toLowerCase();

                row.style.display =
                    text.includes(query) ? '' : 'none';

            });

    });

}


// =========================================
// PAGINATION
// =========================================

document.querySelectorAll('.pagination button').forEach(button => {

    button.addEventListener('click', () => {

        const value = button.textContent.trim();

        // Ignore previous / next buttons
        if (!/^\d+$/.test(value)) {
            return;
        }

        document.querySelectorAll('.pagination button')
            .forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');

    });

});


// =========================================
// SALES PERIOD SELECTOR
// =========================================

const periodSelect = document.querySelector('.period-select');

if (periodSelect) {

    periodSelect.addEventListener('click', () => {

        const periods = [
            'Last 7 days',
            'Last 30 days',
            'Last 3 months',
            'This year'
        ];

        const current =
            periodSelect.childNodes[0]?.textContent.trim();

        const currentIndex =
            periods.indexOf(current);

        const nextIndex =
            currentIndex === -1
                ? 0
                : (currentIndex + 1) % periods.length;

        periodSelect.innerHTML = `
            ${periods[nextIndex]}
            <i data-lucide="chevron-down"></i>
        `;

        lucide.createIcons();

    });

}


// =========================================
// MESSAGE BUTTON
// =========================================

const messageButton =
    document.querySelector('.mess-noti .icon-button:first-child');

if (messageButton) {

    messageButton.addEventListener('click', () => {

        alert('Messages center coming soon.');

    });

}


// =========================================
// NOTIFICATION BUTTON
// =========================================

const notificationButton =
    document.querySelector('.mess-noti .icon-button:nth-child(2)');

if (notificationButton) {

    notificationButton.addEventListener('click', () => {

        alert('You have 3 new notifications.');

    });

}


// =========================================
// ADD PRODUCT
// =========================================

const addProductButtons =
    document.querySelectorAll('.btn-green');

addProductButtons.forEach(button => {

    if (button.textContent.toLowerCase().includes('add product')) {

        button.addEventListener('click', () => {

            alert('Add Product form coming soon.');

        });

    }

});


// =========================================
// FILTER BUTTON
// =========================================

const filterButton =
    document.querySelector('.btn-outline');

if (filterButton) {

    filterButton.addEventListener('click', () => {

        alert('Product filters coming soon.');

    });

}


// =========================================
// TABLE ROW ACTIONS
// =========================================

document.querySelectorAll('.row-actions button')
    .forEach(button => {

        button.addEventListener('click', () => {

            const row = button.closest('tr');

            if (!row) {
                return;
            }

            // Pencil button
            if (button.querySelector('[data-lucide="pencil"]')) {

                const product =
                    row.querySelector('.product-cell')?.textContent.trim();

                alert(`Edit product: ${product}`);

                return;
            }


            // More button
            if (button.querySelector('[data-lucide="ellipsis"]')) {

                const product =
                    row.querySelector('.product-cell')?.textContent.trim();

                alert(`More actions for: ${product}`);

            }

        });

    });


// =========================================
// ANALYTICS PROMO BUTTON
// =========================================

const analyticsButton =
    document.querySelector('.promo-card .btn-green');

if (analyticsButton) {

    analyticsButton.addEventListener('click', () => {

        alert('Analytics page coming soon.');

    });

}


// =========================================
// TOPBAR USER
// =========================================

const topbarUser =
    document.querySelector('.topbar-user');

if (topbarUser) {

    topbarUser.addEventListener('click', () => {

        alert('Profile menu coming soon.');

    });

}


// =========================================
// KEYBOARD SHORTCUT
// =========================================

document.addEventListener('keydown', e => {

    // Ctrl + K
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {

        e.preventDefault();

        if (topSearch) {

            topSearch.focus();

        }

    }

});


// =========================================
// TABLE ROW HOVER / CLICK
// =========================================

document.querySelectorAll('.products-table tbody tr')
    .forEach(row => {

        row.addEventListener('dblclick', () => {

            const product =
                row.querySelector('.product-cell')?.textContent.trim();

            if (product) {

                alert(`Opening ${product}`);

            }

        });

    });


// =========================================
// PRODUCT CATEGORY DONUT — HOVER
// =========================================

const donutSegments =
    document.querySelectorAll('.donut-segment');

const legendItems =
    document.querySelectorAll('.legend li');

const donutValue =
    document.getElementById('categoryDonutValue');

const donutLabel =
    document.getElementById('categoryDonutLabel');

const donutPercentage =
    document.getElementById('categoryDonutPercentage');


const TOTAL_PRODUCTS = 24;

const donutRadius = 58;

const donutCircumference =
    2 * Math.PI * donutRadius;


// =========================================
// BUILD DONUT
// =========================================

let cumulative = 0;

donutSegments.forEach((segment, index) => {

    const value =
        Number(segment.dataset.value);

    const percentage =
        value / TOTAL_PRODUCTS;

    const segmentLength =
        percentage * donutCircumference;

    const offset =
        cumulative * donutCircumference;


    segment.style.strokeDasharray =
        `${segmentLength} ${donutCircumference}`;

    segment.style.strokeDashoffset =
        `-${offset}`;


    cumulative += percentage;


    // Initial animation
    segment.style.opacity = '0';

    setTimeout(() => {
        segment.style.opacity = '1';
    }, index * 100);

});


// =========================================
// SHOW CATEGORY
// =========================================

function showCategory(segment) {

    const label =
        segment.dataset.label;

    const value =
        segment.dataset.value;

    const percentage =
        segment.dataset.percentage;


    // Update center
    donutValue.textContent = value;

    donutLabel.textContent = label;

    donutPercentage.textContent =
        `${percentage}%`;


    // Highlight donut segment
    donutSegments.forEach(other => {

        if (other === segment) {

            other.style.opacity = '1';
            other.style.strokeWidth = '24px';

        } else {

            other.style.opacity = '0.25';
            other.style.strokeWidth = '20px';

        }

    });


    // Highlight matching legend
    legendItems.forEach(item => {

        if (
            item.dataset.category === label
        ) {

            item.classList.add('active');
            item.classList.remove('dimmed');

        } else {

            item.classList.remove('active');
            item.classList.add('dimmed');

        }

    });

}


// =========================================
// RESET
// =========================================

function resetDonut() {

    donutValue.textContent =
        TOTAL_PRODUCTS;

    donutLabel.textContent =
        'Products';

    donutPercentage.textContent =
        '';


    donutSegments.forEach(segment => {

        segment.style.opacity = '1';
        segment.style.strokeWidth = '20px';

    });


    legendItems.forEach(item => {

        item.classList.remove('active');
        item.classList.remove('dimmed');

    });

}


// =========================================
// HOVER — DONUT
// =========================================

donutSegments.forEach(segment => {

    segment.addEventListener('mouseenter', () => {

        showCategory(segment);

    });

});


// =========================================
// HOVER — LEGEND
// =========================================

legendItems.forEach(item => {

    item.addEventListener('mouseenter', () => {

        const category =
            item.dataset.category;


        const matchingSegment =
            [...donutSegments].find(segment => {

                return (
                    segment.dataset.label === category
                );

            });


        if (matchingSegment) {

            showCategory(matchingSegment);

        }

    });

});


// =========================================
// RESET WHEN LEAVING LEGEND
// =========================================

const legend =
    document.querySelector('.legend');

if (legend) {

    legend.addEventListener('mouseleave', () => {

        resetDonut();

    });

}


// =========================================
// RESET WHEN LEAVING DONUT
// =========================================

const donutWrapper =
    document.querySelector('.donut-wrapper');

if (donutWrapper) {

    donutWrapper.addEventListener('mouseleave', () => {

        resetDonut();

    });

}
