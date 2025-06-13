import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Activity, Bookmark, Search, Settings } from 'lucide-react';
import BookmarkedReposProps from '../components/BookmarkedReposProps';
import StatsChart from '../components/StatsChart';
import RepositoryCard from '../components/RepositoryCard';
import FilterPanel from '../components/FilterPanel';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            GitHub Explorer
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover trending open source projects, analyze statistics, and build your collection of amazing repositories.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="explore" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="explore" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Explore
            </TabsTrigger>
            <TabsTrigger value="stats" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Stats
            </TabsTrigger>
            <TabsTrigger value="bookmarks" className="flex items-center gap-2">
              <Bookmark className="w-4 h-4" />
              Bookmarks
            </TabsTrigger>
          </TabsList>

          <TabsContent value="explore" className="space-y-6">
            {/* Filters */}
            <FilterPanel />

            {/* Placeholder for repository cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Example static card */}
              <RepositoryCard />
              <RepositoryCard />
              <RepositoryCard />
            </div>

            {/* Empty state */}
            <div className="text-center py-12">
              <Search className="w-16 h-16 mx-auto text-slate-400 mb-4" />
              <h3 className="text-xl font-semibold text-slate-300 mb-2">No repositories found</h3>
              <p className="text-slate-400">Try adjusting your search criteria or filters.</p>
            </div>
          </TabsContent>

          <TabsContent value="stats">
            <StatsChart />
          </TabsContent>

          <TabsContent value="bookmarks">
            <BookmarkedReposProps />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;


