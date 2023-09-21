
const OTHER_CATEGORIES = [
    'Abuse (Child, Domestic, Sexual)',
    'Agencies & Administration',
    'Automobile (DUI, Crimes, Speeding)',
    'Automobile (Accidents, Insurance)',
   'Banking (Business, Consumer)',
   'Bars & Restaurants',
   'Business Formation & Dissolution',
   'Children (Adoption, Custody, Support)',
   'Class Actions (Bad Drugs, Products)',
   'Commercial Law & Contracts',
   'Commercial Real Estate',
   'Constitutional Law',
   'Constructions (Dispute, Liens)',
   'Credit (Collections, Rights)',
   'Criminal Defense (General/Other)',
   'Discrimination/Harassment (Age, Sex)',
    'Eminent Domain or Condemnation',
    'Employment Contracts',
    'Entertainment & Media',
    'Environmental Law/Zoning Regulation',
    'Family Law (General/Other)',
    'Faulty/Defective Products/Services (Auto, Drug)',
    'Financing & Taxes',
    'Government (General/Other)',
    'Health Care & Insurance',
    'House or Condominium',
    'Husband & Wife',
    'Injuries (Personal, Workers Comp)',
    'Injury Accidents (Auto, Wrongful Death)',
    'Insurance (Auto, Health, Life, Property)',
    'Intentional Injuries (Assault, Bites)',
    'Investments (Annuities, Securities, IPOs)',
    'Juveniles',
    'Landlord/Tenant',
    'Malpractice (Medical, Professional)',
    'Parents (Elder Law/Care, Medicare, SSI)',
    'Patents, Copyrights, Trademarks, etc.',
    'Pay and Benefits',
    'Personal Crimes',
    'Police, Prosecutors and Government',
    'Probate & Contested Wills',
    'Property Crimes',
    'Real Estate/Property (General/Other)',
    'Social Security',
    'Taxes',
    'Transportation (Air, Rail, Sea, Truck)',
    'Unfair Competition',
    'Unions',
    'Visas, Citizenship, Deportation, etc.',
    'White Collar Crime',
    'Workers\' Compensation,',
    'Wrongful Termination'
];

const LAWYERS = [
    {
        id: 1,
        name: "Mitchel M.",
        location: "Cherrel Hill, NJ",
        bol: "Family Law",
        avatar: "assets/user1.jpg"
    },
    {
        id: 2,
        name: "J.C.",
        location: "Little Rock, AR",
        bol: "Job & Employment Law",
        avatar: "assets/user2.jpg"
    },
    {
        id: 3,
        name: "Brigida R.",
        location: "Dallas, TX",
        bol: "Family Law",
        avatar: "assets/user3.jpg"
    }
];

const app = () => {

    const dialogCategories = new bootstrap.Modal( document.querySelector('#dialogCategories') );
    const dialogOtherCategories = new bootstrap.Modal( document.querySelector('#dialogOtherCategories') );
    const dialogReviewSummary = new bootstrap.Modal( document.querySelector('#dialogReviewSummary') );



    const selectCategory = (e) => {
        e.preventDefault();
        document.querySelector('.category-description').innerHTML = e.target.innerHTML;
        showDialogCategory();
    }

    const showDialogCategory = () => {        
        dialogCategories.show();
    }

    const showDialogOtherCategories = (e) => {
        e.preventDefault();
        dialogOtherCategories.show();
    }
    const loadOtherCategories = () => {
        
        const elEntries = document.querySelector('.other-category-entries');

        OTHER_CATEGORIES.forEach( category => {
            const str = `<div class="entry"><a href="#">${category}</a></div>`;
            elEntries.insertAdjacentHTML('beforeend', str);
        })
    }

    const loadReviewSummary = (e) => {
        e.preventDefault();
        const el = e.target;
        const lawyerId = el.dataset.lawyer_id;
        const lawyer = LAWYERS.find( l => l.id == lawyerId);
        const reviewBlock = document.querySelector('.dialog-review-content');
        reviewBlock.querySelector('.lawyer-avatar').setAttribute('src', lawyer.avatar );
        reviewBlock.querySelector('.lawyer-name').innerHTML = lawyer.name;
        reviewBlock.querySelector('.lawyer-location').innerHTML = lawyer.location;
        reviewBlock.querySelector('.lawyer-bol').innerHTML = lawyer.bol;

        dialogReviewSummary.show();
    }

    const loadAutocomplete = (Autocomplete) => {
        const zipcodes = [
            {
                label: "Nowheresville, xx 00000",
                value: "00000"
            },
            {
                label: "Alabama, AL 35004",
                value: "35004"
            },
            {
                label: "New York, NY 10001",
                value: "10001"
            },

        ];
          
        new Autocomplete(document.querySelector('#zipcode'), {
            items: zipcodes,
            highlightTyped: true,
            onSelectItem: (item, inst) => inst._searchInput.value = item.value
        });
    }

    return {
        init : () => {
            document.querySelectorAll('.btn-category').forEach( el => {
                el.addEventListener("click", selectCategory);
            });

            document.querySelector('.other-category-link').addEventListener("click", showDialogOtherCategories);
            document.querySelectorAll('.btn-view-review-summary').forEach( el => el.addEventListener("click", loadReviewSummary));

            loadOtherCategories();
        },

        loadAutocomplete
    }
}