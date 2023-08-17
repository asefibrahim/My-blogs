import Link from 'next/link';
import React from 'react';

const HomeSingleBlog = (Blog) => {
    const { urlToImage, title, publishedAt, description, source } = Blog.Blog;
    return (

        <div class="max-w-3xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <img class="object-cover w-full h-64" src={urlToImage} alt="Article" />

            <div class="p-6">
                <div>
                    <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
                    <a href="#" class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">{title}</a>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
                </div>

                <div class="mt-4">
                    <div class="flex items-center">
                        <div class="flex items-center">
                            <Link href={`/${source.id}`} >
                                <button class="px-2 py-1 text-xs font-semibold uppercase transition-colors duration-300 transform bg-orange-600 text-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">View Details</button>
                            </Link>



                        </div>
                        <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomeSingleBlog;