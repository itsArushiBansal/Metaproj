function NavBar() {
  return (
    <nav className=" mt-3 flex items-center justify-between ">
      <div className="text-2xl font-bold text-blue-500 ms-3">CloudFlo</div>
      <ul className="flex space-x-8 font-bold text-blue-700">
        <li>Product</li>
        <li>Security</li>
        <li>Pricing</li>
        <li>Contact Us</li>
        <li>Blog</li>
      </ul>
      <div className="space-x-4 font-bold text-blue-700 me-3">
        <button>SignUp</button>
        <button>Login</button>
      </div>
    </nav>
  );
}
export default NavBar;
