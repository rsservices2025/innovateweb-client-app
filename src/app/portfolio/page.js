// Import the new server client creation function
import { createClient } from '@/lib/supabase/server-client';

// Server Component to fetch data directly from Supabase
async function getPortfolioData() {
  // Create a Supabase client for this server component
  const supabase = createClient();

  // Fetch all categories
  const { data: categories, error: categoriesError } = await supabase
    .from('categories')
    .select('*')
    .order('created_at', { ascending: true });

  // Fetch all active portfolio templates
  const { data: templates, error: templatesError } = await supabase
    .from('portfolio_templates')
    .select('*')
    .eq('is_active', true)
    .order('created_at');

  if (categoriesError || templatesError) {
    console.error('Error fetching data:', categoriesError || templatesError);
    return []; // Return empty array on error
  }

  // Combine the data: add templates to their respective categories
  const portfolioWithTemplates = categories.map(category => ({
    ...category,
    templates: templates.filter(template => template.category_id === category.id)
  }));

  return portfolioWithTemplates;
}


export default async function PortfolioPage() {
  const portfolioData = await getPortfolioData();

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Templates</h1>
          <p className="mt-4 text-lg text-gray-600">Choose a category to explore our professionally designed templates.</p>
        </div>

        {/* Categories Section */}
        <div className="space-y-16">
          {portfolioData.map(category => (
            // Render a category only if it has templates
            category.templates.length > 0 && (
              <section key={category.id} id={category.name.toLowerCase().replace(/ /g, '-')}>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-blue-600 pl-4">
                  {category.name}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.templates.map(template => (
                    <div key={template.id} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                      {/* Placeholder for template image */}
                      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                        <p className="text-gray-400">Image for {template.title}</p>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-xl mb-2">{template.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{template.description}</p>
                        <div className="flex justify-between items-center">
                          <a href="#" className="text-blue-600 font-semibold hover:underline">View Demo</a>
                          <a href="#" className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-blue-700">Use Template</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )
          ))}
        </div>
      </div>
    </div>
  );
}