import Header from '../../components/Layouts/Dashboard/Header'
import SubHeader from '../../components/Layouts/Dashboard/SubHeader'

const Dashboard = () => {
    return (
      <div className="min-h-full">
       
       <Header />

        <div className="py-10">
         
         <SubHeader /> 
         
          <main>
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            </div>
          </main>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  