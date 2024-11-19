import "./styles/sidebar.css"
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="92" height="24" viewBox="0 0 92 24" fill="none">
          <path
            d="M87.5264 19.6921L80.2088 9.92034L88.6792 2.63832L91.3918 1.1141V0.300323H83.2185V1.11733L85.4855 2.56405L76.1981 11.2185V11.9612L82.253 20.6157C83.8127 22.8827 85.5953 23.6997 88.3078 23.6997H91.5404V22.8827C90.239 22.4047 88.8665 21.4747 87.5264 19.6921ZM75.084 2.67707L77.3509 1.11733V0.300323H68.099V1.11733L70.366 2.67707V21.3262L68.099 22.8859V23.7029H77.3509V22.8859L75.084 21.3262V2.67707ZM64.8697 17.0183C62.9386 19.915 60.5231 21.6233 55.3983 21.6233H54.1356V2.67707L56.8095 1.11733V0.300323H47.1507V1.11733L49.4177 2.67707V21.3262L47.1507 22.8859V23.7029H63.8299L65.6867 17.3122L64.8697 17.0183ZM33.3584 21.8848C28.789 21.8848 24.704 16.014 24.704 9.58773C24.704 5.12809 27.0452 2.11841 30.5748 2.11841C35.1087 2.11841 39.2293 8.06351 39.2293 14.4155C39.226 18.8364 36.8493 21.8848 33.3584 21.8848ZM31.9828 24C39.1163 24 44.057 19.098 44.057 12.2971C44.057 4.831 39.1518 0 31.8698 0C24.8138 0 19.873 4.90205 19.873 11.7029C19.873 19.1722 24.8138 24 31.9828 24ZM17.7966 0.300323H0V1.11733L2.26695 2.67707V21.3262L0 22.8827V23.6997H9.65877V22.8827L6.98493 21.3229V12.9333L14.0797 13.8245L14.3025 13.7503L15.1582 10.8149L14.9709 10.6663L6.9817 11.1862V2.27018H8.68999C13.7793 2.27018 15.3036 2.82562 16.1593 6.35522H16.9408L18.2034 0.710441L17.7966 0.300323Z"
            fill="#1E3723"/>
        </svg>
      </div>
      <div className="dashboardMenu">
        <a href="/dashboard" className="menuLink dashboardLink">Dashboard</a>
        <a href="/dashboard" className="menuLink">Disease risks</a>
        <a href="/dashboard" className="menuLink active">Sleep & Recovery</a>
        <a href="/dashboard" className="menuLink">Body Composition</a>
        <a href="/dashboard" className="menuLink">Metabolic health</a>
      </div>
      <div className="user-container">
        <img src="../assets/user-profile-image.png" width="40" height="40" />
        <div className="user-info">
          <p className="user-name">Jan Vichr</p>
          <p className="user-email">jan@folk.health</p>
        </div>
      </div>
    </div>
  );
}